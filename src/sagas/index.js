import { fork } from 'redux-saga/effects';
import categories from './categories';
import user from './user';
import products from './products';

function* root() {
    yield fork(categories);
    yield fork(user);
    yield fork(products);
}

export default root;
