import * as actionTypes from '../constants/index';
import callApi from '../utils/apiCaller';

import { API_URL } from '../constants/config';

export const addProductRequest = data => {
  return (dispatch) => {
    return callApi(API_URL, 'products', data, 'post').then((res) => {
      dispatch(addProduct(res.data));
    });
  }
}

export const addProduct = data => {
  return {
    type: actionTypes.ADD_NEW_PRODUCT,
    data
  }
}

export const fetchProductCategoriesRequest = () => {
  return (dispatch) => {
    return callApi(API_URL, 'categories').then((res) => {
      dispatch(fetchProductCategories(res.data));
    });
  }
}

export const fetchProductCategories = data => {
  return {
    type: actionTypes.FETCH_PRODUCT_CATEGORY,
    data
  }
}

export const fetchProductsRequest = () => {
  return (dispatch) => {
    return callApi(API_URL, 'products').then((res) => {
      dispatch(fetchProducts(res.data));
    });
  }
}

export const fetchProducts = data => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    data
  };
}

export const selectPageRequest = page => {
  return {
    type: actionTypes.SELECT_PAGE,
    page
  }
}

export const showConfirmBox = () => {
  return {
    type: actionTypes.SHOW_CONFIRM_BOX, 
  }
}

export const fetchProductByIdRequest = productId => {
 return (dispatch) => {
   return callApi(API_URL, `products/${productId}`).then(res => {
     dispatch(fetchProductById(res.data));
   })
 }
}

export const fetchProductById = data => {
  return {
    type: actionTypes.FETCH_PRODUCT_BY_ID,
    data
  }
}

export const editProductByIdRequest = (data, productId) => {
  return (dispatch) => {
    return callApi(API_URL, `products/${productId}`, data, 'put').then(res => {
      dispatch(editProductById(res.data));
    })
  }
}

export const editProductById = data => {
  return {
    type: actionTypes.EDIT_PRODUCT,
    data
  }
}

export const deleteProductRequest = (productId) => {
  return (dispatch) => {
    return callApi(API_URL, `products/${productId}`, null, 'delete').then(res => {
      dispatch(deleteProduct(res.data));
    })
  }
}

export const deleteProduct = data => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    data
  }
}

export const openAlert = () => {
  return {
    type: actionTypes.OPEN_ALERT,
  }
}
