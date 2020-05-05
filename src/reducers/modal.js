import * as mainSiteTypes from './../constants/mainsite';

const initialState = {
    isOpen: false,
    isConfirm: false,
    confirmType: 'normal'
};

const modal = (state = initialState, action) => {
    switch(action.type) {
        case mainSiteTypes.SET_TOGGLE_MODAL: {
            return {...state, isOpen: action.actionType};
        }

        case mainSiteTypes.SET_TOGGLE_MODAL_CONFIRM: {
            return {...state, isConfirm: action.actionType, confirmType: action.confirmType};
        }

        default: 
            return state;
    }
}

export default modal;
