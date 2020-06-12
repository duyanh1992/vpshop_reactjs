import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../../theme/color';
import { formatCurency } from './../../constants/functions';
import { fromTopToBottom, fadeIn } from '../../common/utils';

const CartItemStyle = styled.div`
    border: 1px dotted ${color.gray};
    overflow: hidden;
    animation: 1.5s ${fadeIn} forwards;

    .cart-item-img {
        animation: 1.2s ${fromTopToBottom(-200)} ease-in;
        .prd-img {
            img {
                width: 100%;
            }
        }
    }

    .cart-item-info {
        list-style: none;
        animation: 1.2s ${fromTopToBottom(200)} ease-in;

        li {
            padding: 10px 0;

            label {
                color:${color.black};
                font-weight: bold;
                width: 150px;
                text-transform: capitalize;
            }

            input[type="number"] {
                width: 10%;
            }

            .item-price, .item-total {
                color: ${color.brown};
	            font-weight: bold;
            }
        }

        .edit-btn {
            opacity: ${props => props.opacity};
            pointer-events: ${props => props.pointerEvents};;
        }
    }
`;


export default class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            opacity: 0.5,
            pointerEvents: 'none',
        };
    }

    componentDidMount() {
        const { cartItem } = this.props;

        this.setState({ quantity: cartItem.quantity });
    }

    componentDidUpdate(prevProps) {
        const { cartItem } = this.props;

        if (cartItem.quantity !== this.state.quantity && cartItem.quantity !== prevProps.cartItem.quantity) {
            this.setState({ quantity: this.props.cartItem.quantity })
        }
    }

    onChangeQuantity(e) {
        const { value } = e.target;
        const { cartItem } = this.props;

        if (!value) {
            this.setEditState('', 0.5, 'none');
        }

        else {
            if (cartItem.quantity !== parseInt(value)) {
                this.setEditState(parseInt(value), 1, 'auto');
            }

            else {
                this.setEditState(cartItem.quantity, 0.5, 'none');
            }
        }
    }

    setEditState(quantity, opacity, pointerEvents) {
        this.setState({ quantity, opacity, pointerEvents });
    }

    onEditCartItem() {
        const { cartItem } = this.props;
        const { quantity } = this.state;

        if (!quantity) this.setEditState(1, 1, 'auto');

        const itemTotal = formatCurency((parseInt(cartItem.product_price.replace(/\./g, '')) * quantity).toString());

        const editedCartItem = {
            ...cartItem,
            quantity,
            total: itemTotal
        }

        this.props.editCartItem(editedCartItem);
    }

    onRemoveCartItem() {
        const { cartItem } = this.props;

        this.props.setToggleCartModal(true, 'removeCartItem', cartItem.id);
    }

    render() {
        const { cartItem } = this.props;
        const { opacity, pointerEvents } = this.state;

        return (
            <CartItemStyle opacity={opacity} pointerEvents={pointerEvents} className="cart-item mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 cart-item-img">
                            <figure className="prd-img">
                                <img style={{ 'height': '260px' }} src={cartItem.image_url} alt="" />
                            </figure>
                        </div>
                        <ul className="col-md-9 cart-item-info pl-5">
                            <li>
                                <label>product name:</label>
                                <span className="item-name">{cartItem.product_name}</span>
                            </li>
                            <li>
                                <label>price:</label>
                                <span className="item-price">{cartItem.product_price}</span>
                            </li>
                            <li>
                                <label>Quantity:</label>
                                <input
                                    className="item-amount"
                                    type="number"
                                    value={this.state.quantity}
                                    onChange={e => this.onChangeQuantity(e)}
                                    min="0"
                                />
                            </li>
                            <li>
                                <label>total:</label>
                                <span className="item-total">{cartItem.total} VNĐ</span>
                            </li>

                            <button
                                type="button"
                                className="btn btn-danger float-right"
                                onClick={() => this.onRemoveCartItem()}
                            >Remove
                            </button>

                            <button
                                type="button"
                                className="btn btn-info edit-btn float-right mr-2"
                                onClick={() => this.onEditCartItem()}
                            >Edit
                            </button>
                        </ul>
                    </div>
                </div>
            </CartItemStyle>
        )
    }
}
