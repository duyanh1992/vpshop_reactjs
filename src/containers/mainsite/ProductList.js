import React, { Component } from 'react';
import ProductList from '../../components/MainSite/ProductList';
import { connect } from 'react-redux';
import * as mainProductActions from '../../actions/mainProduct';
import { bindActionCreators } from 'redux';

class ProductListContainer extends Component {
    render() {
        const { match, mainProduct, productActions, categories } = this.props;

        return (
            <ProductList
                match={match}
                productList={mainProduct.productList}
                getProductListCategory={productActions.getProductListCategory}
                categories={categories}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        mainProduct : state.mainProducts,
        categories: state.categories
    };
}

const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(mainProductActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
