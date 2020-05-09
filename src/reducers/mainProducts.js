import * as mainTypes from './../constants/mainsite';

const initialState = {
    newProductsOnPage: []
};

const mainProducts = (state = initialState, action) => {
    switch(action.type) {
        case mainTypes.GET_HOME_PAGE_NEW_PRODUCTS_SUCCESS: {
            const result = {...state};
            const newProducts = action.data;

            for(let i=0; i<newProducts.length; i++) {
                result.newProductsOnPage.push(newProducts[i]);
            }

            return result;
        }

        default:
            return state;
    }
}

export default mainProducts;
