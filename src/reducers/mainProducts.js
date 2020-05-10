import * as mainTypes from './../constants/mainsite';

const initialState = {
    newProductsOnPage: [],
    specialProductsOnPage: [],
    specialPrdIsLeft: true,
    newPrdIsLeft: true
};

const mainProducts = (state = initialState, action) => {
    switch(action.type) {
        case mainTypes.GET_HOME_PAGE_NEW_PRODUCTS_SUCCESS: {
            const result = {...state};
            const newProducts = action.data;

            for(let i=0; i<newProducts.length; i++) {
                result.newProductsOnPage.push(newProducts[i]);
            }

            if(newProducts.length <= 0) {
                result.newPrdIsLeft = false;
            }

            return result;
        }

        case mainTypes.GET_HOME_PAGE_SPECIAL_PRODUCTS_SUCCESS: {
            const result = {...state};
            const specialProducts = action.data;

            for(let i=0; i<specialProducts.length; i++) {
                result.specialProductsOnPage.push(specialProducts[i]);
            }

            if(specialProducts.length <= 0) {
                result.specialPrdIsLeft = false;
            }

            return result;
        }


        default:
            return state;
    }
}

export default mainProducts;
