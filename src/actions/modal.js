import * as mainSiteTypes from '../constants/mainsite';

export const setToggleModal = actionType => {
    return {
        type: mainSiteTypes.SET_TOGGLE_MODAL,
        actionType
    };
}

export const setToggleModalConfirm = actionType => {
    return {
        type: mainSiteTypes.SET_TOGGLE_MODAL_CONFIRM,
        actionType
    };
}