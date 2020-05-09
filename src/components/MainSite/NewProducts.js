import React, { Component } from 'react'
import Title from '../../theme/styles/Title';

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

        return newProductsOnPage.map(product => {
            return (
                <div className="col-md-4" key={product.id}>
                    <div className="prd pt-3">
                        <div className="container">
                            <figure>
                                <img alt="new-prd" style={{height: '150px'}} className="prd-img" src={product.image_url} />
                            </figure>
                            <p className="prd-name" style={{height: '40px'}}>{product.name}</p>
                            <p className="prd-price">Giá: {product.price}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const { newProductsOnPage } = this.props;

        const loadMoreBtnStyle = {
            textTransform: 'capitalize',
        };

        if(newProductsOnPage.length > 0) {
            return (
                <div className="new-products">
                    <Title className="title">new products</Title>
                    <div className="prd-list text-center mt-3 mb-5">
                        <div className="row">
                            {this.renderNewProducts()}
                        </div>
    
                        <button 
                            style={loadMoreBtnStyle}
                            type="button"
                            className="btn btn-info load-more-btn btn-lg"
                            onClick={() => this.loadMoreItems()}
                        >
                        load more
                        </button>
                    </div>
                </div>
            )
        }

        return '';
    }
}
