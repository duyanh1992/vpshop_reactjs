import React, { Component } from 'react';
import ProductStyle from '../../theme/styles/Products';
import NewProducts from './NewProducts';
import SpecialProducts from './SpecialProducts';

export default class Products extends Component {
    render() {
        const { mainProductFunctions, mainProduct } = this.props;

        return (
            /* Products */
            <div className="col-md-9">
                <ProductStyle className="products">
                    <NewProducts
                        getNewProducts={mainProductFunctions.getNewProducts}
                        newProductsOnPage={mainProduct.newProductsOnPage}
                        newPrdIsLeft={mainProduct.newPrdIsLeft}
                    />

                    <SpecialProducts
                        getSpecialProducts={mainProductFunctions.getSpecialProducts}
                        specialProductsOnPage={mainProduct.specialProductsOnPage}
                        specialPrdIsLeft={mainProduct.specialPrdIsLeft}
                    />
                </ProductStyle>
            </div>
        /* End products */
        )
    }
}
