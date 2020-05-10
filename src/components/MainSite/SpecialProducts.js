import React, { Component } from 'react'
import Title from '../../theme/styles/Title';

export default class SpecialProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
        };

        this.loadMoreItems = this.loadMoreItems.bind(this);
    }

    componentDidMount() {
        const { page } = this.state;

        this.props.getSpecialProducts(page);
    }

    loadMoreItems() {
        this.setState({page: this.state.page+1}, () => {
            this.props.getSpecialProducts(this.state.page);
        });
    }

    renderSpecialProducts() {
        const { specialProductsOnPage } = this.props;

        return specialProductsOnPage.map(product => {
            return (
                <div className="col-md-4" key={product.id}>
                    <div className="prd pt-3">
                        <div className="container">
                            <figure>
                                <img alt="sp-prd" style={{height: '150px'}} className="prd-img" src={product.image_url} />
                            </figure>
                            <p className="prd-name" style={{height: '40px'}}>{product.name}</p>
                            <p className="prd-price">Giá: {product.price} VNĐ</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderLoadMoreButton() {
        const { specialPrdIsLeft } = this.props;

        const loadMoreBtnStyle = {
            textTransform: 'capitalize',
        };

        if(specialPrdIsLeft) {
            return (
                <button 
                    style={loadMoreBtnStyle}
                    type="button"
                    className="btn btn-info load-more-btn btn-lg"
                    onClick={() => this.loadMoreItems()}
                >
                load more
                </button>
            );
        }

        return null;
    }

    render() {
        return (
            <div className="special-products">
                <Title className="title">special products</Title>
                <div className="prd-list text-center mt-3 mb-3">
                    <div className="row">
                        {this.renderSpecialProducts()}
                    </div>

                    {this.renderLoadMoreButton()}
                </div>
            </div>
        )
    }
}
