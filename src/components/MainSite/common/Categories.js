import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../../../theme/color';
import { Link } from "react-router-dom";
import Loading from './Loading';
import { fadeIn } from '../../../common/utils';

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
        transition: 1s;
        animation: 0.8s ${fadeIn} ease-out;

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
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    getCatePrdList(cateId) {
        this.props.getProductListCategory(cateId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isLoading && this.props.categories.length > 0) {
            this.sideBarTimeout = window.setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.sideBarTimeout);
    }

    renderSideBar() {
        const { isLoading } = this.state;
        const { categories } = this.props

        if (!isLoading) {
            return (
                <ul className="category-list">
                    {
                        categories.map(category => (
                            <li key={category.id}>
                                <Link
                                    onClick={() => this.getCatePrdList(category.id)}
                                    to={`/product-list/${category.id}`}>
                                    {category.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            );
        }

        return <Loading />;
    }

    render() {
        return (
            /* Category */
            <div className="col-md-3">
                <Category className="categories">
                    <h3 className="title">phone categories</h3>
                    {this.renderSideBar()}
                </Category>

            </div>
            /* End category  */
        )
    }
}
