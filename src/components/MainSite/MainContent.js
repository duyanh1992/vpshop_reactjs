import React, { Component } from 'react'
import Categories from './common/Categories'
import Products from './Products';
import ProductList from './ProductList';

export default class MainContent extends Component {
    render() {
        return (
            /* Main content */
            <div class="container">
                <div className="content mb-4">
                    <div className="row">         
                        <Categories />

                        {/* <Products /> */}
                        <ProductList />
                    </div>
                </div>
            {/* End main content */}
            </div>
        )
    }
}
