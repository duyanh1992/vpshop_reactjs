import * as mainSiteTypes from './../constants/mainsite';

export const addProductToCart = productToCart => {
    return {
        type: mainSiteTypes.ADD_PRODUCT_TO_CART,
        productToCart
    };
}

export const addProductToCartSuccess = (productData, userId) => {
    return {
        type: mainSiteTypes.ADD_PRODUCT_TO_CART_SUCCESS,
        productData,
        userId
    };
}
