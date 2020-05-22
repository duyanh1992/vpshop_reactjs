import React, { Component } from 'react'
import Title from '../../theme/styles/Title';
import ProductItem from './common/ProductItem';

export default class NewProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };

        this.loadMoreItems = this.loadMoreItems.bind(this);
    }

    componentDidMount() {
        const { page } = this.state;

        this.props.getNewProducts(page);
    }

    loadMoreItems() {
        this.setState({page: this.state.page+1}, () => {
            this.props.getNewProducts(this.state.page);
        });
    }
    
    renderNewProducts() {
        const { newProductsOnPage } = this.props;

        return newProductsOnPage.map(product => <ProductItem product={product} key={product.id}/>);
    }

    renderLoadMoreButton() {
        const { newPrdIsLeft } = this.props;

        const loadMoreBtnStyle = {
            textTransform: 'capitalize',
        };

        if(newPrdIsLeft) {
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
        const { newProductsOnPage } = this.props;

        if(newProductsOnPage.length > 0) {
            return (
                <div className="new-products">
                    <Title className="title">new products</Title>
                    <div className="prd-list text-center mt-3 mb-5">
                        <div className="row">
                            {this.renderNewProducts()}
                        </div>
    
                        {this.renderLoadMoreButton()}
                    </div>
                </div>
            )
        }

        return '';
    }
}
