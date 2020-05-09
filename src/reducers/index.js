import { combineReducers } from 'redux';
import products from './products';
import categories from './category';
import modal from './modal';
import users from './users';
import mainProducts from './mainProducts';

const allReducers = combineReducers({
  products,
  categories,
  modal,
  users,
  mainProducts
});

export default allReducers;
