import * as mainSiteTypes from './../constants/mainsite';

const initialState = {
    userId: null,
    cartItems: [],
    cartTotal: null,
}


const cart = (state = initialState, action) => {
    switch(action.type) {
        case mainSiteTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
            const result = {...state};
            return result;
        }

        case mainSiteTypes.GET_USER_CART_INFO_SUCCESS: {
            const result = {
                ...state,
                userId: action.userId,
                cartItems: action.data,
                cartTotal: action.totalPrice,
            };

            return result;
        }

        default: 
            return state;
    }
}

export default cart;