import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../../../theme/color';
import { Link } from "react-router-dom";

const Category = styled.div`
    .title {
        font-size: 16px;
        padding: 12px;
        background: ${color.black};
        color: ${color.white};
        text-transform: capitalize;
        font-weight: bold;
    }

    .category-list {
        border: 1px solid ${color.gray};
        list-style: none;

        li {
            padding: 8px 12px;
            border-bottom: 1px dotted ${color.gray};

            a {
                color: ${color.black};
                font-weight: bold;
                text-transform: capitalize;
            }
        }
    }
`;

export default class Categories extends Component {
    getCatePrdList(e, cateId) {
        this.props.getProductListCategory(cateId);
    }

    renderCategories(data) {
        const result = data.map(category => 
            <li key={category.id}>
                <Link 
                    onClick={(e) => this.getCatePrdList(e, category.id)} 
                    to={`/product-list/cateList/${category.id}`}>
                {category.name}
                </Link>
            </li>
        );

        return result;
    }

    render() {
        const { categories } = this.props;
        return (
            /* Category */
            <div className="col-md-3">                   
                <Category className="categories">
                <h3 className="title">phone categories</h3>
                <ul className="category-list">
                    {this.renderCategories(categories)}
                </ul>
                </Category>  
            </div>
            /* End category  */
        )
    }
}
