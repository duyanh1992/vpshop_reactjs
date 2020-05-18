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

export const getSpecialProducts = page => {
    return {
        type: mainSiteTypes.GET_HOME_PAGE_SPECIAL_PRODUCTS,
        page
    }
}

export const getSpecialProductsSuccess = data => {
    return {
        type: mainSiteTypes.GET_HOME_PAGE_SPECIAL_PRODUCTS_SUCCESS,
        data
    }
}

export const getProductListCategory = categoryId => {
    return {
        type: mainSiteTypes.GET_PRODUCT_LIST_CATEGORY,
        categoryId
    }
}

export const getProductListCategorySuccess = data => {
    return {
        type: mainSiteTypes.GET_PRODUCT_LIST_CATEGORY_SUCCESS,
        data
    }
}

export const searchProductByName = productName => {
    return {
        type: mainSiteTypes.SEARCH_PRODUCT_BY_NAME,
        productName
    }
}

export const searchProductByNameSuccess = data => {
    return {
        type: mainSiteTypes.SEARCH_PRODUCT_BY_NAME_SUCCESS,
        data
    }
}
