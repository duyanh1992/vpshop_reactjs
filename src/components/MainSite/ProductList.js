import React, { Component } from 'react';
import ProductStyle from '../../theme/styles/Products';
import Title from '../../theme/styles/Title';
import ProductItem from './common/ProductItem';
import Loading from './common/Loading';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        const { productList, match } = this.props;
        const { key } = match.params;

        if (productList.length <= 0) {
            if (parseInt(key) > 0) this.props.getProductListCategory(key);
            else this.props.searchProductByName(key);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.productList.length > 0 && prevState.isLoading) {
            window.setTimeout(() => {
                this.setState({ isLoading: false });
            }, 2000);
        }
    }

    renderProduct() {
        const { productList } = this.props;
        const { isLoading } = this.state;

        if (isLoading) return <Loading />;

        if (productList.length > 0) {
            return productList.map(product => <ProductItem product={product} key={product.id} />);
        }

        return <h3 className="text-center" style={{ width: '100%' }}>There is no product to show</h3>;
    }

    render() {
        let { match, categories } = this.props;
        let categoryName = '';
        let category = null;
        const { key } = match.params;

        if (parseInt(key) > 0) {
            category = categories.find(category => category.id === key);
        }
        categoryName = category ? category.name : '';

        return (
            /* Products */
            <div className="col-md-9">
                <ProductStyle className="products">
                    <div className="product-list">
                        <Title className="title">{categoryName.toUpperCase()}</Title>
                        <div className="prd-list text-center mt-3 mb-3">
                            <div className="row">
                                {this.renderProduct()}
                            </div>
                        </div>
                    </div>
                </ProductStyle>
            </div>
            /* End products */
        )
    }
}
