import { combineReducers } from 'redux';
import products from './products';
import categories from './category';

const allReducers = combineReducers({
  products,
  categories
});

export default allReducers;
