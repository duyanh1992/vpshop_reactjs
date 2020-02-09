import React from 'react';
import Products from './components/Admin/Main/Products';
import ProductForm from './components/Admin/Main/ProductForm';

const routes = [
  {
    path: '/admin',
    exact: true,
    main: () => <Products />
  },

  {
    path: '/admin/products',
    exact: true,
    main: () => <Products />
  },

  {
    path: '/admin/add',
    exact: false,
    main: () => <ProductForm />
  },

  {
    path: '/admin/edit/:productId',
    exact: true,
    main: (match) => <ProductForm match={match} />
  },
];

export default routes;