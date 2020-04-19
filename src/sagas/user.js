import { fork, take, call, put } from 'redux-saga/effects';
import { API_URL } from '../constants/config';
import { STATUS_CODE } from '../constants/codeStatus';
import * as mainSiteTypes from './../constants/mainsite';
import callApi from '../utils/apiCaller';
import { signUpSuccess } from './../actions/user';

function* watchUserSignUp() {
    const { signUpData } = yield take(mainSiteTypes.SIGN_USER_UP);

    const result = yield call(callApi, API_URL, 'users', signUpData, 'post');
    const { data, status } = result;

    if(STATUS_CODE.INSERT_SUCCESS === status) {
        yield put(signUpSuccess(data));
    }
}

function* users() {
    yield fork(watchUserSignUp);
}

export default users;