import React, { Component } from 'react'
import Title from '../../theme/styles/Title';
import ProductItem from './common/ProductItem';
import Loading from './common/Loading';
import { fadeIn } from './../../common/utils';
import styled from 'styled-components';

const Prdlist = styled.div`
    transition: 1s;
    animation: 1s ${fadeIn} linear;
`;

export default class NewProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            isLoading: true,
            btnLoading: false
        };

        this.loadMoreItems = this.loadMoreItems.bind(this);
    }

    componentDidMount() {
        const { page } = this.state;

        this.props.getNewProducts(page);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.newProductsOnPage.length > 0 && prevState.isLoading) {
            this.loadingTimeOut = window.setTimeout(() => {
                this.setState({ isLoading: false });
            }, 3000);
        }

        if (this.props.newProductsOnPage.length > 0 && prevState.btnLoading) {
            this.setState({ btnLoading: false });
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.timeOut);
        window.doActionTimeOut(this.timeOut);
    }

    loadMoreItems() {
        this.setState({ page: this.state.page + 1, btnLoading: true }, () => {
            this.doActionTimeOut = window.setTimeout(() => {
                this.props.getNewProducts(this.state.page);
            }, 2000);
        });
    }

    renderNewProducts() {
        const { newProductsOnPage } = this.props;

        return newProductsOnPage.map(product => <ProductItem product={product} key={product.id} />);
    }

    renderLoadMoreButton() {
        const { newPrdIsLeft } = this.props;
        const { btnLoading } = this.state;

        const loadMoreBtnStyle = {
            textTransform: 'capitalize',
        };

        if (newPrdIsLeft) {
            if (!btnLoading)
                return (
                    <button
                        style={loadMoreBtnStyle}
                        type="button"
                        className="btn btn-info load-more-btn btn-lg"
                        onClick={() => this.loadMoreItems()}
                    >
                        load more
                    </button>
                );

            return (
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            );
        }

        return null;
    }

    renderContent() {
        const { isLoading } = this.state;

        if (isLoading) return <Loading />;

        return (
            <Prdlist className="prd-list text-center mt-3 mb-5">
                <div className="row">
                    {this.renderNewProducts()}
                </div>

                {this.renderLoadMoreButton()}
            </Prdlist>
        );
    }

    render() {
        return (
            <div className="new-products">
                <Title className="title">new products</Title>
                {this.renderContent()}
            </div>
        )
    }
}
