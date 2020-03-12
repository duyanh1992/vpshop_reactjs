import * as actionTypes from '../constants/index';
import * as mainActionTypes from '../constants/mainsite';

const initialState = [];

const category = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_PRODUCT_CATEGORY: {
      const result = action.data;
      return result;
    }

    case mainActionTypes.FETCH_MAIN_PRODUCT_CATEGORY_SUCCESS: {
      const result = action.data;
      return result;
    }

    default: return state;
  }
}

export default category;