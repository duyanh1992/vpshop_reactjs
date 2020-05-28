import { take, fork, call, put } from 'redux-saga/effects';
import * as mainSiteTypes from '../constants/mainsite';
import callApi from '../utils/apiCaller';
import { API_URL } from '../constants/config';
import { formatCurency } from './../constants/functions';
import { STATUS_CODE } from '../constants/codeStatus';
import { getUserCartInfoSuccess } from './../actions/cart';

function* watchAddToCart() {
    while(true) {
        const { productToCart } = yield take(mainSiteTypes.ADD_PRODUCT_TO_CART);

        // Check if that product existed in DB
        const cartInfo = yield call(callApi, API_URL, 'cart');
        const { data } = cartInfo;

        if(data.length > 0) {
            const selectedProduct = data.filter(cart => cart.product_id === productToCart.product_id);
            if (selectedProduct.length > 0) {
                productToCart.quantity = selectedProduct[0].quantity + 1;
                productToCart.total = formatCurency((parseInt(productToCart.total.replace(/\./g, '')) * productToCart.quantity).toString());

                yield call(callApi, API_URL, `cart/${selectedProduct[0].id}`, productToCart, 'put');
            }

            else {
                yield call(callApi, API_URL, 'cart', productToCart, 'post');
            }
        }

        else {
            yield call(callApi, API_URL, 'cart', productToCart, 'post');
        }
    }
}

function* watchGetUserCart() {
    while(true) {
        const { userId } = yield take(mainSiteTypes.GET_USER_CART_INFO);

        const cartInfo = yield call(callApi, API_URL, 'cart');
        const { data, status } = cartInfo;

        if(status === STATUS_CODE.GET_SUCCCESS) {
            const necessaryCartItem = data.filter(cartItem => cartItem.user_id === userId);
            
            let totalPrice = necessaryCartItem.reduce((item1, item2) => {
                return item1 + parseInt(item2.total.replace(/\./g, '')) 
            }, 0);

            totalPrice = formatCurency(totalPrice.toString());

            yield put(getUserCartInfoSuccess(userId, necessaryCartItem, totalPrice));
        }
    }
}

function* watchEditCart() {
    while(true) {
        const { editedCartItem } = yield take(mainSiteTypes.EDIT_CART_ITEM);
        
        const cartEditInfo = yield call(callApi, API_URL, `cart/${editedCartItem.id}`, editedCartItem, 'put');
        const { status } = cartEditInfo;

        if(status === STATUS_CODE.GET_SUCCCESS) {
            const cartInfo = yield call(callApi, API_URL, 'cart');

            if(cartInfo.status === STATUS_CODE.GET_SUCCCESS) {
                const necessaryCartItem = cartInfo.data.filter(cartItem => cartItem.user_id === editedCartItem.user_id);

                let totalPrice = necessaryCartItem.reduce((item1, item2) => {
                    return item1 + parseInt(item2.total.replace(/\./g, '')) 
                }, 0);
                totalPrice = formatCurency(totalPrice.toString());

                yield put(getUserCartInfoSuccess(editedCartItem.user_id, necessaryCartItem, totalPrice));
            }
        }
    }
}

function* watchRemoveCart() {
    while(true) {
        const { cartId, userId } = yield take(mainSiteTypes.REMOVE_CART_ITEM);

        const removeCart = yield call(callApi, API_URL, `cart/${cartId}`, null, 'delete');

        if(removeCart.status === STATUS_CODE.GET_SUCCCESS) {
            const cartInfo = yield call(callApi, API_URL, 'cart');

            if(cartInfo.status === STATUS_CODE.GET_SUCCCESS) {
                const necessaryCartItem = cartInfo.data.filter(cartItem => cartItem.user_id === userId);

                let totalPrice = necessaryCartItem.reduce((item1, item2) => {
                    return item1 + parseInt(item2.total.replace(/\./g, '')) 
                }, 0);
                totalPrice = formatCurency(totalPrice.toString());

                yield put(getUserCartInfoSuccess(userId, necessaryCartItem, totalPrice, true));
            }
        }
    }
}

function* cart() {
    yield fork(watchAddToCart);
    yield fork(watchGetUserCart);
    yield fork(watchEditCart);
    yield fork(watchRemoveCart);
}

export default cart;
