import React from 'react';
import Products from './containers/mainsite/Products';
import ProductList from './containers/mainsite/ProductList';
import SignUp from './containers/mainsite/SignUp';
import SignIn from './containers/mainsite/SignIn';
import DetailProduct from './containers/mainsite/DetailProduct';
import Cart from './containers/mainsite/Cart';

const mainRoutes = [
    {
        path: '/',
        exact: true,
        main: () => <Products />
    },

    {
        path: '/main-products',
        exact: false,
        main: () => <Products />
    },

    {
        path: '/product-list/:key',
        exact: false,
        main: ({match}) => <ProductList match={match} />
    },

    {
        path: '/sign-in',
        exact: false,
        main: ({match}) => <SignIn match={match} />
    },

    {
        path: '/sign-up',
        exact: false,
        main: ({match}) => <SignUp match={match}/>
    },

    {
        path: '/detail-product/:productId',
        exact: false,
        main: ({ match }) => <DetailProduct match={match}/>
    },

    {
        path: '/cart',
        exact: false,
        main: () => <Cart />
    }
];

export default mainRoutes;
