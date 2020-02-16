import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../../theme/styles/Title';

const ProductStyle = styled.div`
    .prd-info {
        .prd-price {
            span {
                font-weight: bold;
                color: $red-color;
            }
        }

        .prd-detail {
            list-style: none;

            li {
                margin-bottom: 20px;

                label {
                    width: 120px;
                }
            }
        }
    }
`;

export default class DetailProduct extends Component {
    render() {
        return (
            /* Detail product */
            <div className="col-md-9">
                <ProductStyle className="products">
                    <Title className="title">detail product</Title>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-5">
                                <figure className="img-product-detail text-center">
                                    <img src="images/prd02.jpg" alt="" />
                                </figure>
                            </div>

                            <div className="col-md-7 prd-info">
                                <h3 className="prd-name mb-1">HTC One X 32GB</h3>
                                <p className="prd-price">Giá sản phẩm: <span>6.800.000 VNĐ</span></p>
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
                                        <span>• Máy Mới 100%</span>
                                    </li>
                                    <li>
                                        <label>Khuyến Mại:</label>
                                        <span>• Dán Màn Hình 3 Lớp</span>
                                    </li>
                                    <li>
                                        <label>Còn hàng:</label>
                                        <span>• Còn hàng</span>
                                    </li>
                                    <button type="button" className="btn btn-danger">Add to cart</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ProductStyle>
            </div>
            /* End detail product */
        )
    }
}
