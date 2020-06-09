import { fork, take, call, put } from 'redux-saga/effects';
import callApi from '../utils/apiCaller';
import * as mainSiteTypes from './../constants/mainsite';
import { API_URL } from '../constants/config';
import { fetchCategoriesSuccess, getProductListCategorySuccess } from './../actions/mainProduct';
import { STATUS_CODE } from '../constants/codeStatus';

function* watchFetchCategory() {
    while (true) {
        yield take(mainSiteTypes.FETCH_MAIN_PRODUCT_CATEGORY);

        const result = yield call(callApi, API_URL, 'categories');
        const { data, status } = result;

        if (status === STATUS_CODE.GET_SUCCCESS) {
            yield put(fetchCategoriesSuccess(data));
        }
    }
}

function* watchFetchCategoryProductList() {
    while (true) {
        const { categoryId } = yield take(mainSiteTypes.GET_PRODUCT_LIST_CATEGORY);

        const result = yield call(callApi, API_URL, 'products');
        const { data, status } = result;

        if (status === STATUS_CODE.GET_SUCCCESS) {
            const necessaryProducts = data.filter(product => product.category_id === categoryId);
            yield put(getProductListCategorySuccess(necessaryProducts));
        }
    }
}

function* categories() {
    yield fork(watchFetchCategory);
    yield fork(watchFetchCategoryProductList);
}

export default categories;
