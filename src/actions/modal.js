import * as mainSiteTypes from '../constants/mainsite';

export const setToggleModal = ( actionType, confirmType ) => {
    return {
        type: mainSiteTypes.SET_TOGGLE_MODAL,
        actionType,
        confirmType
    };
}

export const setToggleCartModal = ( actionType, confirmType, itemId ) => {
    return {
        type: mainSiteTypes.SET_TOGGLE_CART_MODAL,
        actionType,
        confirmType,
        itemId
    };
}

export const setToggleModalConfirm = ( actionType, confirmType ) => {
    return {
        type: mainSiteTypes.SET_TOGGLE_MODAL_CONFIRM,
        actionType,
        confirmType
    };
}
