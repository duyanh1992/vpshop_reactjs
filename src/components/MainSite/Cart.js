import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../../theme/styles/Title';
import color from '../../theme/color';
import CartItem from './CartItem';
import ModalSample2 from './../../containers/ModalSample2'
import AlertMessage2 from '../../components/AlerMessage2';
import Loading from './common/Loading';

const CartFooter = styled.div`
    .cart-total {
        color: ${color.red};
        font-weight: bold;
    }
`;

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            justDeleteProduct: false,
            isLoading: true
        };
    }

    componentDidMount() {
        this.props.getUserCartInfo(this.props.userId);
    }

    componentDidUpdate(prevProps, prevState) {
        const { modal, userId, cart } = this.props;

        if (cart.cartItems.length > 0 && prevState.isLoading) {
            this.loadingTimeout = window.setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        }

        if (modal.isConfirm && modal.confirmType === "removeCartItem") {
            this.props.setToggleModalConfirm(false);
            this.props.removeCartItem(modal.itemId, userId);
        }

        if (cart.deleted
            && !prevProps.cart.deleted
        ) {
            this.props.setCardItemNotDeleted();

            this.setState({ justDeleteProduct: true }, () => {
                this.deleteTimeout = window.setTimeout(() => {
                    this.setState({ justDeleteProduct: false });
                }, 3000);
            });
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.deleteTimeout);
        window.clearTimeout(this.loadingTimeout);
    }


    renderCartItems(cart, modal, editCartItem, setToggleCartModal) {
        return cart.cartItems.map(cartItem => <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            modal={modal}
            editCartItem={editCartItem}
            setToggleCartModal={setToggleCartModal}
        />);
    }

    renderModal() {
        const { modal } = this.props;

        if (modal.isOpen && modal.confirmType === "removeCartItem") {
            return <ModalSample2 confirmType="removeCartItem" />;
        }

        return null;
    }

    renderAlertMessage() {
        const { justDeleteProduct } = this.state;

        return <AlertMessage2
            content="Product was deleted from your cart successfully !!!"
            isOpen={justDeleteProduct}
            type='success'
        />
    }

    renderCartContent() {
        const { isLoading } = this.state;

        const {
            cart,
            userId,
            modal,
            editCartItem,
            setToggleCartModal,
        } = this.props;

        if (cart.cartItems.length <= 0) return <h3>There is no item in your cart</h3>;

        if (isLoading) return <Loading />;

        if (cart && cart.userId === userId && cart.cartItems.length > 0) {
            return (
                <div className="cart-list">
                    {this.renderCartItems(cart, modal, editCartItem, setToggleCartModal)}

                    <CartFooter className="cart-footer">
                        <p>
                            Tổng giá trị giỏ hàng là: <span className="cart-total">{cart.cartTotal} VNĐ</span>
                        </p>
                    </CartFooter>
                </div>
            );
        }
    }

    render() {
        return (
            /* Cart */
            <div className="user-cart col-md-9">
                <div className="mb-4">
                    <Title className="title">your cart</Title>
                </div>
                {this.renderAlertMessage()}
                {this.renderCartContent()}
                {this.renderModal()}
            </div>
            /* End cart */
        )
    }
}
