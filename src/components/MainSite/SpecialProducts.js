import React, { Component } from 'react'
import Title from '../../theme/styles/Title';
import ProductItem from './common/ProductItem';

export default class SpecialProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
        };

        this.loadMoreItems = this.loadMoreItems.bind(this);
    }

    componentDidMount() {
        const { page } = this.state;

        this.props.getSpecialProducts(page);
    }

    loadMoreItems() {
        this.setState({page: this.state.page+1}, () => {
            this.props.getSpecialProducts(this.state.page);
        });
    }

    renderSpecialProducts() {
        const { specialProductsOnPage } = this.props;

        return specialProductsOnPage.map(product => <ProductItem product={product} key={product.id}/>);
    }

    renderLoadMoreButton() {
        const { specialPrdIsLeft } = this.props;

        const loadMoreBtnStyle = {
            textTransform: 'capitalize',
        };

        if(specialPrdIsLeft) {
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
        }

        return null;
    }

    render() {
        return (
            <div className="special-products">
                <Title className="title">special products</Title>
                <div className="prd-list text-center mt-3 mb-3">
                    <div className="row">
                        {this.renderSpecialProducts()}
                    </div>

                    {this.renderLoadMoreButton()}
                </div>
            </div>
        )
    }
}
