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
    render() {
        return (
            /* Category */
            <div className="col-md-3">                   
                <Category className="categories">
                    <h3 className="title">phone categories</h3>
                    <ul className="category-list">
                    <li><a href="#a">iPhone</a></li>
                    <li><a href="#a">Samsung</a></li>
                    <li><a href="#a">Sony Ericson</a></li>
                    <li><a href="#a">LG</a></li>
                    <li><a href="#a">HTC</a></li>
                    <li><a href="#a">Nokia</a></li>
                    <li><a href="#a">Blackberry</a></li>
                    <li><a href="#a">Asus</a></li>
                    <li><a href="#a">Lenovo</a></li>
                    <li><a href="#a">Motorola</a></li>
                    <li><a href="#a">Mobiado</a></li>
                    <li><a href="#a">Vertu</a></li>
                    <li><a href="#a">QMobile</a></li>
                    </ul>
                </Category>  
            </div>
            /* End category  */
        )
    }
}
