import * as actionTypes from '../constants/index';

const initialState = {
  isConfirmed: false,
  page: 1,
  productList: [],
  selectedProduct: [],
  updated: false
};

const product = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NEW_PRODUCT: {
      const result = {...state, updated: false};
      result.productList.push(action.data);
      
      return result;
    }

    case actionTypes.FETCH_PRODUCTS: {
      const result = {...state};
      result.productList = action.data;
      return result;
    }

    case actionTypes.SELECT_PAGE: {
      const result = {...state};
      result.page = action.page;
      return result;
    }

    case actionTypes.FETCH_PRODUCT_BY_ID: {
      const result = {...state, selectedProduct: []};
      result.selectedProduct.push(action.data);
      return result;
    }

    case actionTypes.EDIT_PRODUCT:{
      const result = {...state, updated: false};
      const editedIndex =  result.productList.findIndex(item => item.id === action.data.id);
      result.productList[editedIndex] = action.data;

      return result;
    }

    case actionTypes.DELETE_PRODUCT: {
      const result = {...state, updated: false};
      const { productList } = result;
      result.productList = productList.filter(product => product.id !== action.data.id);

      return result;
    }

    case actionTypes.OPEN_ALERT: {
      return {...state, updated: true};
    }

    default: 
      return state; 
  }
}

export default product;