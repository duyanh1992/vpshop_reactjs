import { fork, take, call, put } from 'redux-saga/effects';
import callApi from '../utils/apiCaller';
import * as mainSiteTypes from './../constants/mainsite';
import { API_URL } from '../constants/config';
import { fetchCategoriesSuccess } from './../actions/mainProduct';
import { STATUS_CODE } from '../constants/codeStatus';

function* watchFetchCategory() {
    while(true) {
        yield take(mainSiteTypes.FETCH_MAIN_PRODUCT_CATEGORY);

        const result = yield call(callApi, API_URL, 'categories');
        const { data, status } = result;

        if (status === STATUS_CODE.GET_SUCCCESS) {
            yield put(fetchCategoriesSuccess(data));    
        }
    }
}

function* categories() {
    yield fork(watchFetchCategory);
}

export default categories;