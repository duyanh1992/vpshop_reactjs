import React, { Component } from 'react'
import Title from '../../theme/styles/Title';

export default class SpecialProducts extends Component {
    render() {
        return (
            <div className="special-products">
                <Title className="title">special products</Title>
                <div className="prd-list text-center mt-3 mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="prd pt-3">
                                <div className="container">
                                    <figure>
                                        <img alt="sp-prd" className="prd-img" src="images/prd01.jpg" />
                                    </figure>
                                    <p className="prd-name">Samsung Note trắng</p>
                                    <p className="prd-price">Giá: 6.800.000 VNĐ</p>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4">
                        <div className="prd pt-3">
                            <div className="container">
                                <figure>
                                    <img alt="sp-prd" className="prd-img" src="images/prd01.jpg" />
                                </figure>
                                <p className="prd-name">Samsung Note trắng</p>
                                <p className="prd-price">Giá: 6.800.000 VNĐ</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="prd pt-3">
                            <div className="container">
                                <figure>
                                    <img alt="sp-prd" className="prd-img" src="images/prd01.jpg" />
                                </figure>
                                <p className="prd-name">Samsung Note trắng</p>
                                <p className="prd-price">Giá: 6.800.000 VNĐ</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
