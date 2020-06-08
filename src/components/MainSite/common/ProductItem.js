import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import color from '../../../theme/color';
import { fadeIn } from '../../../common/utils';

const PrdItem = styled.div`
    transition: 1s;
    animation: 0.4s ${fadeIn} linear;

    a {
        text-decoration: none;
    }    

    .prd-name {
        color: ${color.black}
    }
`;

export default class ProductItem extends Component {
    render() {
        const { product } = this.props;

        if (product)
            return (
                <PrdItem className="col-md-4">
                    <Link to={`/detail-product/${product.id}`}>
                        <div className="prd pt-3">
                            <div className="container">
                                <figure>
                                    <img alt="prd-img" style={{ height: '150px' }} className="prd-img" src={product.image_url} />
                                </figure>
                                <p className="prd-name" style={{ height: '40px' }}>{product.name}</p>
                                <p className="prd-price">Giá: {product.price} VNĐ</p>
                            </div>
                        </div>
                    </Link>
                </PrdItem>
            )

        return '';
    }
}
