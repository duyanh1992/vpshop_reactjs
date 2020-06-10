import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../../theme/styles/Title';
import color from '../../theme/color';
import AlertMessage2 from './../AlerMessage2';
import { message } from '../../constants/message';
import { Redirect } from 'react-router-dom';
import Loading from './common/Loading';
import { fromLeftToRight, fromRightToLeft } from '../../common/utils';

const ProductStyle = styled.div`
    .img-product-block {
        animation: 1.5s ${fromLeftToRight(-300)} forwards;

        .img-product-detail {
            height: 440px;

            .img-fluid {
                height: 100%;
            }
        }
    }

    .prd-info {
        animation: 1.5s ${fromRightToLeft(300)} ease-out;

        .prd-price {
            span {
                font-weight: bold;
                color: ${color.red};
                font-size: 25px;
            }
        }

        .prd-detail {
            list-style: none;

            li {
                margin-bottom: 20px;
                text-transform: capitalize;

                label {
                    width: 120px;
                }

                span {
                    font-weight: bold;
                }
            }
        }
    }
`;

export default class DetailProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userSignedIn: true,
            submitted: false,
            redirectToCart: false,
            isLoading: true
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const { productId } = match.params;

        this.props.getProductInfo(productId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.selectedProduct && prevState.isLoading) {
            this.loadingTimeout = window.setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.submitTimeout);
        window.clearTimeout(this.loadingTimeout);
    }


    addToCart() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const { selectedProduct } = this.props;

        if (!currentUser || currentUser.length <= 0) {
            this.setState({ userSignedIn: false });
        }
        else {
            const userId = currentUser[0].id;

            const productToCart = {
                product_name: selectedProduct.name,
                product_price: selectedProduct.price,
                quantity: 1,
                total: selectedProduct.price,
                product_id: selectedProduct.id,
                user_id: userId,
                image_url: selectedProduct.image_url
            };

            this.props.addProductToCart(productToCart);

            this.setState({ submitted: true }, () => {
                this.submitTimeout = window.setTimeout(() => {
                    this.setState({ redirectToCart: true });
                }, 5000);
            });
        }
    }

    renderAlert() {
        const { userSignedIn, submitted } = this.state;
        const content = submitted ? message.cart.addToCartSuccess : message.cart.addToCartError;
        const type = submitted ? 'success' : 'danger';

        return <AlertMessage2
            content={content}
            isOpen={!userSignedIn || submitted}
            type={type}
        />
    }

    renderMainContent(selectedProduct, stock, state, special) {
        const { isLoading } = this.state;

        if (isLoading) return <Loading />;

        return (
            <div className="container">
                <div className="row mt-5" style={{ 'overflow': 'hidden' }}>
                    <div className="col-md-5 img-product-block">
                        <figure className="img-product-detail text-center">
                            <img src={selectedProduct.image_url} alt="" className="img-fluid" />
                        </figure>
                    </div>

                    <div className="col-md-7 prd-info">
                        <h3 className="prd-name mb-1">{selectedProduct.name}</h3>
                        <p className="prd-price mt-3">Giá sản phẩm: <span>{selectedProduct.price} VNĐ</span></p>
                        <hr />
                        <ul className="prd-detail">
                            <li>
                                <label>Bảo hành :</label>
                                <span>• 12 Tháng</span>
                            </li>
                            <li>
                                <label>Đi kèm :</label>
                                <span>• Hộp, sách , sạc , cáp , tai nghe</span>
                            </li>
                            <li>
                                <label>Tình trạng:</label>
                                <span>• {state}</span>
                            </li>
                            <li>
                                <label>Khuyến Mại:</label>
                                <span>• {special}</span>
                            </li>
                            <li>
                                <label>Còn hàng:</label>
                                <span>• {stock}</span>
                            </li>
                            <button
                                type="button"
                                className="btn btn-danger btn-lg mt-2"
                                onClick={() => this.addToCart()}
                            >Add to cart
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { selectedProduct } = this.props;
        const { submitted, redirectToCart } = this.state;

        if (redirectToCart && submitted) return <Redirect to='/cart' />;

        if (selectedProduct) {
            const stock = selectedProduct.stock === 1 ? 'Còn hàng' : 'Hết hàng';
            const state = selectedProduct.state === 1 ? 'máy mới 100%' : 'mới 90%';
            const special = selectedProduct.special === 1 ? 'Dán Màn Hình 3 Lớp' : 'không';

            return (
                /* Detail product */
                <div className="col-md-9">
                    <ProductStyle className="products">
                        <Title className="title">detail product</Title>
                        {this.renderAlert()}
                        {this.renderMainContent(selectedProduct, stock, state, special)}
                    </ProductStyle>
                </div>
                /* End detail product */
            )
        }

        return '';
    }
}
