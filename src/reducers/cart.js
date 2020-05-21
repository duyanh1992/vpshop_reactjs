import * as mainSiteTypes from './../constants/mainsite';

const initialState = [];

const cart = (state = initialState, action) => {
    switch(action.type) {
        case mainSiteTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
            const result = {...state};

            return result;
        }

        default: 
            return state;
    }
}

export default cart;