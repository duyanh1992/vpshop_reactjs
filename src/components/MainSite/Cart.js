import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../../theme/styles/Title';
import color from '../../theme/color';
import CartItem from './CartItem';

const CartFooter = styled.div`
    .cart-total {
        color: ${color.red};
        font-weight: bold;;
    }
`;

export default class Cart extends Component {
    componentDidMount() {
        this.props.getUserCartInfo(this.props.userId);
    }

    renderCartItems() {
        const { cart, userId } = this.props;

        if(cart && cart.userId === userId && cart.cartItems.length > 0) {
            return cart.cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />);
        }

        return <h3>There is no item in your cart</h3>;
    }

    render() {
        const { cart } = this.props;
        
        return (
            /* Cart */
            <div className="user-cart col-md-9">
                <div className="mb-4">
                    <Title className="title">your cart</Title>
                </div>
                <div className="cart-list">
                    {/* <CartItem /> */}
                    {this.renderCartItems()}

                    <CartFooter className="cart-footer">
                        <p>
                            Tổng giá trị giỏ hàng là: <span className="cart-total">{cart.cartTotal} VNĐ</span>
                        </p>
                    </CartFooter>
                </div>
            </div>
            /* End cart */
        )
    }
}
