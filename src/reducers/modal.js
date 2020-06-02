import * as mainSiteTypes from './../constants/mainsite';

const initialState = {
    isOpen: false,
    isConfirm: false,
    confirmType: 'normal',
    itemId: 0
};

const modal = (state = initialState, action) => {
    switch(action.type) {
        case mainSiteTypes.SET_TOGGLE_MODAL: {
            return {...state, isOpen: action.actionType, confirmType: action.confirmType};
        }

        case mainSiteTypes.SET_TOGGLE_MODAL_CONFIRM: {
            return {...state, isConfirm: action.actionType, confirmType: action.confirmType};
        }

        case mainSiteTypes.SET_TOGGLE_CART_MODAL: {
            return {
                ...state,
                isOpen: action.actionType,
                confirmType: action.confirmType,
                itemId: action.itemId
            };
        }

        default: 
            return state;
    }
}

export default modal;
