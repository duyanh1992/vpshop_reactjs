import React, { Component } from 'react';
import Cart from '../../components/MainSite/Cart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from './../../actions/cart';

class CartContainer extends Component {
    render() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const { cartFunction, cart } = this.props;

        if (!currentUser) 
            return (
                <div className="col-md-9 text-center">
                    <h3>You have to sign in in order to view your cart</h3>
                </div>
            )
        
        return <Cart
                    getUserCartInfo={cartFunction.getUserCartInfo}
                    userId={currentUser[0].id}
                    cart={cart}
                />;    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cartFunction: bindActionCreators(cartActions, dispatch)
    };
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
