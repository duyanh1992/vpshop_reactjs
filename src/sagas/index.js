import { fork } from 'redux-saga/effects';
import categories from './categories';
import user from './user';
import products from './products';
import cart from './cart';

function* root() {
    yield fork(categories);
    yield fork(user);
    yield fork(products);
    yield fork(cart);
}

export default root;
