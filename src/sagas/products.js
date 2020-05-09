import { fork, take, call, put } from 'redux-saga/effects';
import * as mainSiteTypes from '../constants/mainsite';
import callApi from '../utils/apiCaller';
import { API_URL } from '../constants/config';
import { STATUS_CODE } from '../constants/codeStatus';
import { getNewProductsSuccess } from './../actions/mainProduct';

function* watchGetNewProducts() {
    while(true) {
        const { page } = yield take(mainSiteTypes.GET_HOME_PAGE_NEW_PRODUCTS);

        const result = yield call(callApi, API_URL, 'products');
        const { data, status } = result;

        if (status === STATUS_CODE.GET_SUCCCESS) {
            const rowPerPage = 3;
            let firstItem = (page * rowPerPage) - rowPerPage;

            const necessaryProducts = data.slice(firstItem, firstItem+rowPerPage);

            yield put(getNewProductsSuccess(necessaryProducts));
        }
    }
}

function* products() {
    yield fork(watchGetNewProducts);
}

export default products;
