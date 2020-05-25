import * as mainSiteTypes from './../constants/mainsite';

export const addProductToCart = productToCart => {
    return {
        type: mainSiteTypes.ADD_PRODUCT_TO_CART,
        productToCart
    };
}

export const getUserCartInfo = userId => {
    return {
        type: mainSiteTypes.GET_USER_CART_INFO,
        userId
    };
}

export const getUserCartInfoSuccess = (userId, data, totalPrice) => {
    return {
        type: mainSiteTypes.GET_USER_CART_INFO_SUCCESS,
        userId,
        data,
        totalPrice
    };
}
