import * as mainSiteTypes from './../constants/mainsite';

const initialState = {
    isOpen: false
};

const modal = (state = initialState, action) => {
    switch(action.type) {
        case mainSiteTypes.SET_TOGGLE_MODAL: {
            return {...state, isOpen: action.actionType};
        }

        default: 
            return state;
    }
}

export default modal;
