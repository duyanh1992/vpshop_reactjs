import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../../theme/styles/Title';
import color from '../../theme/color';


const CartItem = styled.div`
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

const CartFooter = styled.div`
    .cart-total {
        color: ${color.red};
        font-weight: bold;;
    }
`;

export default class Cart extends Component {
    render() {
        return (
            /* Cart */
            <div className="user-cart col-md-9">
                <div className="mb-4">
                    <Title className="title">your cart</Title>
                </div>
                <div className="cart-list">
                    <CartItem className="cart-item mb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <figure className="prd-img">
                                        <img src="images/prd05.jpg" alt="" />
                                    </figure>	
                                </div>
                                <ul className="col-md-9 cart-item-info pl-5">
                                    <li>
                                        <label>product name:</label>
                                        <span className="item-name">Samsung Galaxy Note Trắng</span>
                                    </li>
                                    <li>
                                        <label>price:</label>
                                        <span className="item-price">6.800.000 VNĐ</span>
                                    </li>
                                    <li>
                                        <label>Amount:</label>
                                        <input className="item-amount" type="number" value={1}/>
                                    </li>
                                    <li>
                                        <label>total:</label>
                                        <span className="item-total">27.200.000 VNĐ</span>
                                    </li>
                                    <button type="button" className="btn btn-danger float-right">Remove this item</button>
                                </ul>
                            </div>
                        </div>						
                    </CartItem>
                    <CartItem className="cart-item mb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <figure className="prd-img">
                                    <img src="images/prd05.jpg" alt="" />
                                    </figure>	
                                </div>
                                <ul className="col-md-9 cart-item-info pl-5">
                                    <li>
                                        <label>product name:</label>
                                        <span className="item-name">Samsung Galaxy Note Trắng</span>
                                    </li>
                                    <li>
                                        <label>price:</label>
                                        <span className="item-price">6.800.000 VNĐ</span>
                                    </li>
                                    <li>
                                        <label>Amount:</label>
                                        <input className="item-amount" type="number" value={1} />
                                    </li>
                                    <li>
                                        <label>total:</label>
                                        <span className="item-total">27.200.000 VNĐ</span>
                                    </li>
                                    <button type="button" className="btn btn-danger float-right">Remove this item</button>
                                </ul>
                            </div>
                        </div>						
                    </CartItem>
                    <CartItem className="cart-item mb-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <figure className="prd-img">
                                        <img src="images/prd05.jpg" alt="" />
                                    </figure>	
                                </div>
                                <ul className="col-md-9 cart-item-info pl-5">
                                    <li>
                                        <label>product name:</label>
                                        <span className="item-name">Samsung Galaxy Note Trắng</span>
                                    </li>
                                    <li>
                                        <label>price:</label>
                                        <span className="item-price">6.800.000 VNĐ</span>
                                    </li>
                                    <li>
                                        <label>Amount:</label>
                                        <input className="item-amount" type="number" value={1} />
                                    </li>
                                    <li>
                                        <label>total:</label>
                                        <span className="item-total">27.200.000 VNĐ</span>
                                    </li>
                                    <button type="button" className="btn btn-danger float-right">Remove this item</button>
                                </ul>
                            </div>
                        </div>						
                    </CartItem>

                    <CartFooter className="cart-footer">
                        <p>
                            Tổng giá trị giỏ hàng là: <span className="cart-total">108.800.000 VNĐ</span>
                        </p>
                    </CartFooter>
                </div>
            </div>
            /* End cart */
        )
    }
}
