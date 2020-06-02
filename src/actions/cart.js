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

export const getUserCartInfoSuccess = (userId, data, totalPrice, deleted = false) => {
    return {
        type: mainSiteTypes.GET_USER_CART_INFO_SUCCESS,
        userId,
        data,
        totalPrice,
        deleted
    };
}

export const editCartItem = editedCartItem => {
    return {
        type: mainSiteTypes.EDIT_CART_ITEM,
        editedCartItem
    };
}

export const removeCartItem = (cartId, userId) => {
    return {
        type: mainSiteTypes.REMOVE_CART_ITEM,
        cartId,
        userId
    };
}

export const setCardItemNotDeleted = () => {
    return {
        type: mainSiteTypes.SET_CART_ITEM_NOT_DELETED,
    };
}
