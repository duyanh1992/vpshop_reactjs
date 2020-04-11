import React from 'react';
import Products from './containers/Mainsite/Products';
import ProductList from './containers/Mainsite/ProductList';
import SignForm from './containers/Mainsite/SignForm';
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
        path: '/product-list',
        exact: false,
        main: () => <ProductList />
    },

    {
        path: '/sign-form',
        exact: false,
        main: () => <SignForm />
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