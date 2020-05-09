import * as mainSiteTypes from './../constants/mainsite';

export const fetchCategories = () => {
    return {
        type: mainSiteTypes.FETCH_MAIN_PRODUCT_CATEGORY
    }
}

export const fetchCategoriesSuccess = data => {
    return {
        type: mainSiteTypes.FETCH_MAIN_PRODUCT_CATEGORY_SUCCESS,
        data
    }
}

export const getNewProducts = page => {
    return {
        type: mainSiteTypes.GET_HOME_PAGE_NEW_PRODUCTS,
        page
    }
}

export const getNewProductsSuccess = data => {
    return {
        type: mainSiteTypes.GET_HOME_PAGE_NEW_PRODUCTS_SUCCESS,
        data
    }
}
