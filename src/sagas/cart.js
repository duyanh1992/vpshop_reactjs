import { take, fork, call } from 'redux-saga/effects';
import * as mainSiteTypes from '../constants/mainsite';
import callApi from '../utils/apiCaller';
import { API_URL } from '../constants/config';
import { formatCurency } from './../constants/functions';

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
    }
}

function* cart() {
    yield fork(watchAddToCart);
}

export default cart;