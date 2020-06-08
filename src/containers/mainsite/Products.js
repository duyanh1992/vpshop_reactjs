import React, { Component } from 'react';
import Products from '../../components/MainSite/Products';
import { connect } from 'react-redux';
import * as mainProductActions from '../../actions/mainProduct';
import { bindActionCreators } from 'redux';

class ProductContainer extends Component {
    render() {
        const { mainProductFunctions, mainProduct } = this.props;

        return (
            <Products
                mainProductFunctions={mainProductFunctions}
                mainProduct={mainProduct}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        mainProduct: state.mainProducts
    };
}

const mapDisptachToProps = dispatch => {
    return {
        mainProductFunctions: bindActionCreators(mainProductActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDisptachToProps)(ProductContainer);
