import { combineReducers } from 'redux';
import products from './products';
import categories from './category';
import modal from './modal';

const allReducers = combineReducers({
  products,
  categories,
  modal
});

export default allReducers;
