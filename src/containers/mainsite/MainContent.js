import React, { Component } from 'react'
import Categories from './common/Categories'
import Products from './Products';
import ProductList from './ProductList';
import SignForm from '../../containers/mainsite/SignForm';
import DetailProduct from '../../containers/mainsite/DetailProduct';
import Cart from '../../containers/mainsite/Cart';

export default class MainContent extends Component {
    render() {
        return (
            /* Main content */
            <div class="container">
                <div className="content mb-4">
                    <div className="row">         
                        <Categories />

                        {/* <Products /> */}
                        {/* <ProductList /> */}
                        {/* <SignForm /> */}
                        {/* <DetailProduct /> */}
                        <Cart />
                    </div>
                </div>
            {/* End main content */}
            </div>
        )
    }
}
