import * as actionTypes from '../constants/index';

const initialState = [];

const category = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_PRODUCT_CATEGORY: {
      const result = action.data;
      return result;
    }

    default: return state;
  }
}

export default category;