import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../../../theme/color';

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
    renderCategories(data) {
        const result = data.map(category => 
            <li key={category.id}><a href="#a">{category.name}</a></li>
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
