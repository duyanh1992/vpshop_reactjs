import React, { Component } from 'react';
import DetailProduct from '../../components/MainSite/DetailProduct';
import { connect } from 'react-redux';
import * as mainProductActions from './../../actions/mainProduct';
import * as cartActions from './../../actions/cart';
import { bindActionCreators } from 'redux';

class DetailProductContainer extends Component {
    render() {
        const { match, mainProductFunctions, mainProducts, cartFunctions } = this.props;
        
        return (
            <DetailProduct
                match={match}
                getProductInfo={mainProductFunctions.getProductInfo}
                selectedProduct={mainProducts.selectedProduct}
                addProductToCart={cartFunctions.addProductToCart}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        mainProductFunctions: bindActionCreators(mainProductActions, dispatch),
        cartFunctions: bindActionCreators(cartActions, dispatch)
    };
}

const mapStateToProps = state => {
    return {
        mainProducts: state.mainProducts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProductContainer);
