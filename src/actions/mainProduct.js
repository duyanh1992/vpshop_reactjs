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