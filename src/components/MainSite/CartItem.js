import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../../theme/color';

const CartItemStyle = styled.div`
    border: 1px dotted ${color.gray};

    .prd-img {
        img {
            width: 100%;
        }
    }

    .cart-item-info {
        list-style: none;

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
    }
`;


export default class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };
    }

    componentDidMount() {
        const { cartItem } = this.props;

        this.setState({quantity: cartItem.quantity});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.cartItem.quantity !== this.state.quantity && this.props.cartItem.quantity !== prevProps.cartItem.quantity) {
            this.setState({ quantity: this.props.cartItem.quantity })
        }
    }

    onChangeQuantity(e) {
        const { value } = e.target;

        this.setState({quantity: parseInt(value)});
    }

    render() {
        const { cartItem } = this.props;

        return (
            <CartItemStyle className="cart-item mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <figure className="prd-img">
                                <img src={cartItem.image_url} alt="" />
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
                                />
                            </li>
                            <li>
                                <label>total:</label>
                                <span className="item-total">{cartItem.total} VNĐ</span>
                            </li>
                            <button type="button" className="btn btn-danger float-right">Remove this item</button>
                        </ul>
                    </div>
                </div>						
            </CartItemStyle>
        )
    }
}
