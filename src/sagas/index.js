import { fork } from 'redux-saga/effects';
import categories from './categories';
import user from './user';

function* root() {
    yield fork(categories);
    yield fork(user);
}

export default root;