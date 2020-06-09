import React, { Component } from 'react'
import Title from '../../theme/styles/Title';
import ProductItem from './common/ProductItem';
import Loading from './common/Loading';

export default class SpecialProducts extends Component {
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

        this.props.getSpecialProducts(page);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.specialProductsOnPage.length > 0 && prevState.isLoading) {
            this.timeOut = window.setTimeout(() => {
                this.setState({ isLoading: false });
            }, 3000);
        }

        if (this.props.specialProductsOnPage.length > 0 && prevState.btnLoading) {
            this.setState({ btnLoading: false });
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.timeOut);
    }

    loadMoreItems() {
        this.setState({ page: this.state.page + 1, btnLoading: true }, () => {
            this.props.getSpecialProducts(this.state.page);
        });
    }

    renderSpecialProducts() {
        const { specialProductsOnPage } = this.props;

        return specialProductsOnPage.map(product => <ProductItem product={product} key={product.id} />);
    }

    renderLoadMoreButton() {
        const { specialPrdIsLeft } = this.props;
        const { btnLoading } = this.state;

        const loadMoreBtnStyle = {
            textTransform: 'capitalize',
        };

        if (specialPrdIsLeft) {
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
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
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
            <div className="prd-list text-center mt-3 mb-3">
                <div className="row">
                    {this.renderSpecialProducts()}
                </div>

                {this.renderLoadMoreButton()}
            </div>
        );
    }

    render() {
        return (
            <div className="special-products">
                <Title className="title">special products</Title>
                {this.renderContent()}
            </div>
        )
    }
}
