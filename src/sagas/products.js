import { fork, take, call, put } from 'redux-saga/effects';
import * as mainSiteTypes from '../constants/mainsite';
import callApi from '../utils/apiCaller';
import { API_URL } from '../constants/config';
import { STATUS_CODE } from '../constants/codeStatus';
import { getNewProductsSuccess, getSpecialProductsSuccess } from './../actions/mainProduct';

function* watchGetNewProducts() {
    while(true) {
        const { page } = yield take(mainSiteTypes.GET_HOME_PAGE_NEW_PRODUCTS);

        const result = yield call(callApi, API_URL, 'products');
        const { data, status } = result;

        if (status === STATUS_CODE.GET_SUCCCESS) {
            const rowPerPage = 3;
            let firstItem = (page * rowPerPage) - rowPerPage;

            const totalPage = (data.length)/rowPerPage;

            const necessaryProducts =  (page > totalPage) ? [] : data.slice(firstItem, firstItem+rowPerPage);

            yield put(getNewProductsSuccess(necessaryProducts));
        }
    }
}

function* watchGetSpecialProducts() {
    while(true) {
        const { page } = yield take(mainSiteTypes.GET_HOME_PAGE_SPECIAL_PRODUCTS);

        const result = yield call(callApi, API_URL, 'products');
        const { data, status } = result;

        if (status === STATUS_CODE.GET_SUCCCESS) {
            const rowPerPage = 3;
            let firstItem = (page * rowPerPage) - rowPerPage;

            const specialProducts = data.filter(item => item.special === 1)
            const totalPage = (specialProducts.length)/rowPerPage;

            const necessaryProducts = (page > totalPage) ? [] : specialProducts.slice(firstItem, firstItem+rowPerPage);

            yield put(getSpecialProductsSuccess(necessaryProducts));
        }
    }
}

function* products() {
    yield fork(watchGetNewProducts);
    yield fork(watchGetSpecialProducts);
}

export default products;
