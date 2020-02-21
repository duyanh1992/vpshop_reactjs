import React from 'react';
import Products from './components/MainSite/Products';
import ProductList from './components/MainSite/ProductList';
import SignForm from './components/MainSite/SignForm';
import DetailProduct from './components/MainSite/DetailProduct';
import Cart from './components/MainSite/Cart';

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