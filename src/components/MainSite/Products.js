import React, { Component } from 'react';
import ProductStyle from '../../theme/styles/Products';
import NewProducts from './NewProducts';
import SpecialProducts from './SpecialProducts';

export default class Products extends Component {
    render() {
        const { getNewProducts, newProductsOnPage } = this.props;

        return (
            /* Products */
            <div className="col-md-9">
                <ProductStyle className="products">
                    <NewProducts
                        getNewProducts={getNewProducts}
                        newProductsOnPage={newProductsOnPage}
                    />

                    <SpecialProducts />
                </ProductStyle>
            </div>
        /* End products */
        )
    }
}
