import React, { Component } from 'react';
import ProductStyle from '../../theme/styles/Products';
import Title from '../../theme/styles/Title';

export default class ProductList extends Component {
    componentDidMount() {
        const { productList, match } = this.props;

        if(productList.length <= 0 && match.params.cateId) {
            this.props.getProductListCategory(match.params.cateId);
        }
    }

    renderProduct() {
        const { productList } = this.props;

        if(productList.length > 0) {
            return productList.map(product => {
                return (
                    <div className="col-md-4" key={product.id}>
                        <div className="prd pt-3">
                            <div className="container">
                                <figure>
                                    <img alt="prd-img" style={{height: '150px'}} className="prd-img" src={product.image_url} />
                                </figure>
                                <p className="prd-name" style={{height: '40px'}}>{product.name}</p>
                                <p className="prd-price">Giá: {product.price} VNĐ</p>
                            </div>
                        </div>
                    </div>
                ); 
            });
        }

        return <h3 className="text-center" style={{width: '100%'}}>There is no product to show</h3>;
    }

    render() {
        let { match, categories} = this.props;

        const category = categories.find(category => category.id === match.params.cateId);
        const categoryName = category ? category.name : '';

        return (
            /* Products */
            <div className="col-md-9">
                <ProductStyle className="products">
                <div className="product-list">
                    <Title className="title">{categoryName}</Title>
                    <div className="prd-list text-center mt-3 mb-3">
                        <div className="row">
                            {this.renderProduct()}
                        </div>
                    </div>
                    </div>
                </ProductStyle>
            </div>
        /* End products */
        )
    }
}
