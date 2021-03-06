import * as mainTypes from './../constants/mainsite';

const initialState = {
    newProductsOnPage: [],
    specialProductsOnPage: [],
    specialPrdIsLeft: true,
    newPrdIsLeft: true,
    productList: [],
    selectedProduct: {}
};

const mainProducts = (state = initialState, action) => {
    switch (action.type) {
        case mainTypes.GET_HOME_PAGE_NEW_PRODUCTS_SUCCESS: {
            const result = { ...state };
            const newProducts = action.data;

            if (newProducts.length <= 0)
                return { ...state, newPrdIsLeft: false }

            for (let i = 0; i < newProducts.length; i++) {
                const checkExisted = result.newProductsOnPage.findIndex(item => item.id === newProducts[i].id);

                if (checkExisted === -1) result.newProductsOnPage.push(newProducts[i]);
            }

            return result;
        }

        case mainTypes.GET_HOME_PAGE_SPECIAL_PRODUCTS_SUCCESS: {
            const result = { ...state };
            const specialProducts = action.data;

            for (let i = 0; i < specialProducts.length; i++) {
                const checkExisted = result.specialProductsOnPage.findIndex(item => item.id === specialProducts[i].id);

                if (checkExisted === -1) result.specialProductsOnPage.push(specialProducts[i]);
            }

            if (specialProducts.length <= 0) {
                result.specialPrdIsLeft = false;
            }

            return result;
        }

        case mainTypes.GET_PRODUCT_LIST_CATEGORY_SUCCESS:
        case mainTypes.SEARCH_PRODUCT_BY_NAME_SUCCESS:
            {
                const result = { ...state };

                result.productList = action.data;

                return result;
            }

        case mainTypes.GET_PRODUCT_INFO_SUCCESS: {
            const result = { ...state };

            result.selectedProduct = action.data;

            return result;
        }

        default:
            return state;
    }
}

export default mainProducts;
