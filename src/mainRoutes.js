import React from 'react';
import Products from './containers/Mainsite/Products';
import ProductList from './containers/Mainsite/ProductList';
import SignUp from './containers/Mainsite/SignUp';
import SignIn from './containers/Mainsite/SignIn';
import DetailProduct from './containers/Mainsite/DetailProduct';
import Cart from './containers/Mainsite/Cart';

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
        path: '/product-list/:type/:cateId',
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
        path: '/detail-product',
        exact: false,
        main: () => <DetailProduct />
    },

    {
        path: '/cart',
        exact: false,
        main: () => <Cart />
    }
];

export default mainRoutes;
