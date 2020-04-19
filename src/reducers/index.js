import { combineReducers } from 'redux';
import products from './products';
import categories from './category';
import modal from './modal';
import users from './users';

const allReducers = combineReducers({
  products,
  categories,
  modal,
  users
});

export default allReducers;
