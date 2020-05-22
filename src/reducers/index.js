import { combineReducers } from 'redux';
import products from './products';
import categories from './category';
import modal from './modal';
import users from './users';
import mainProducts from './mainProducts';
import cart from './cart';

const allReducers = combineReducers({
  products,
  categories,
  modal,
  users,
  mainProducts,
  cart
});

export default allReducers;
