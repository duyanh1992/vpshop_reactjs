import React, { Component } from 'react';
import Cart from '../../components/MainSite/Cart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from './../../actions/cart';
import * as modalActions from './../../actions/modal';

class CartContainer extends Component {
    render() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const { cartFunction, cart, modalFunctions, modal } = this.props;

        if (!currentUser) 
            return (
                <div className="col-md-9 text-center">
                    <h3>You have to sign in in order to view your cart</h3>
                </div>
            )
        
        return <Cart
                    getUserCartInfo={cartFunction.getUserCartInfo}
                    editCartItem={cartFunction.editCartItem}
                    removeCartItem={cartFunction.removeCartItem}
                    setToggleCartModal={modalFunctions.setToggleCartModal}
                    setToggleModalConfirm={modalFunctions.setToggleModalConfirm}
                    setCardItemNotDeleted={cartFunction.setCardItemNotDeleted}
                    userId={currentUser[0].id}
                    cart={cart}
                    modal={modal}
                />;    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cartFunction: bindActionCreators(cartActions, dispatch),
        modalFunctions: bindActionCreators(modalActions, dispatch)
    };
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        modal: state.modal
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
