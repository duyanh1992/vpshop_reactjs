import { fork, take, call, put } from 'redux-saga/effects';
import { API_URL } from '../constants/config';
import { STATUS_CODE } from '../constants/codeStatus';
import * as mainSiteTypes from './../constants/mainsite';
import callApi from '../utils/apiCaller';
import { signUpSuccess, signInRespond } from './../actions/user';
import { setToggleModalConfirm } from './../actions/modal';

function* watchUserSignUp() {
    const { signUpData } = yield take(mainSiteTypes.SIGN_USER_UP);

    const result = yield call(callApi, API_URL, 'users', signUpData, 'post');
    const { data, status } = result;

    if(STATUS_CODE.INSERT_SUCCESS === status) {
        yield put(signUpSuccess(data));
    }
}

function* watchUserSignIn() {
    while(true) {
        const { signInData } = yield take(mainSiteTypes.SIGN_USER_IN);

        const result = yield call(callApi, API_URL, 'users');
        const { data } = result;

        const currentUser = data.find(user => {
            return user.name === signInData.name && user.password === signInData.password;
        });

        yield put(signInRespond(currentUser));
        yield put(setToggleModalConfirm(false));
    }
}

function* users() {
    yield fork(watchUserSignUp);
    yield fork(watchUserSignIn);
}

export default users;
