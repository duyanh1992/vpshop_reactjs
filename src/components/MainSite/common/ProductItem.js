import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import color from '../../../theme/color';
import { fadeIn } from '../../../common/utils';

const PrdItem = styled.div`
    transition: 1s;
    animation: 0.8s ${fadeIn} linear;

    a {
        text-decoration: none;

        .prd-name {
            color: ${color.black};
            height: 40px;
        }
    
        .prd-img {
            height: 150px;
        }
    }

    @media (max-width: 576px) {
        a {
            .prd-img {
                height: 300px;
            }
            .prd-name {
                color: ${color.black}
                margin: 0;
            }
        }
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
                                    <img alt="prd-img"className="prd-img" src={product.image_url} />
                                </figure>
                                <p className="prd-name">{product.name}</p>
                                <p className="prd-price">Giá: {product.price} VNĐ</p>
                            </div>
                        </div>
                    </Link>
                </PrdItem>
            )

        return '';
    }
}
