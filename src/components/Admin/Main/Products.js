import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import 
{ fetchProductsRequest,
  fetchProductCategoriesRequest,
  deleteProductRequest,
  selectPageRequest
} from '../../../actions/product';
//import { formatNumber } from '../../constants/functions';

const rowPerPage = 2;


class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  delProduct(productId) {
    if (parseInt(productId) > 0) {
      this.props.delProduct(productId);
    }
  }
  
  selectPage() {
    this.props.sendPage(this.props.products.page - 1);
  }

  renderProduct() {
    const { page } = this.props.products;
    const { categories, products } = this.props;
    const { productList } = products;
    // const rowPerPage = 2;

    const pos = page * rowPerPage - rowPerPage;
    const productsPerPage = productList.slice(pos, pos+2);

    if (productsPerPage.length > 0) {
      return (
        productsPerPage.map((product, index) => (
          <tr key={index}>
            {/* <th scope="row">{index + 1}</th> */}
            <td>{product.name}</td>
            <td>{product.price} VNĐ</td>
            <td>{categories[product.category_id - 1].name}</td>
            <td>
              <img className="img-prd" src={product.image_url} alt="product" />
            </td>
            <td>
              <Link to={`/admin/edit/${product.id}`}><i className="fas fa-edit" /></Link>
              <span className="delete-icon" onClick={() => this.delProduct(product.id)}><i className="fas fa-trash-alt" /></span>
            </td>
          </tr> 
        ))  
      );
    }
    else {
      this.selectPage();
    }
  }

  render() {
    const { categories, products } = this.props;
    const { productList } = products;

    if (productList.length > 0 && categories.length > 0) {
      return (
        <div className="product-list">
          <Link className="float-right mt-3 mb-3 btn btn-danger" to="/admin/add">Add new Product</Link>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="thead-light">
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">product name</th>
                  <th scope="col">price</th>
                  <th scope="col">category</th>
                  <th scope="col">image</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {this.renderProduct()}
              </tbody>
            </table>
          </div>

          <Pagination />
        </div>
      );
    }

    return '';
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProductsRequest())
    },

    fetchCategories: () => {
      dispatch(fetchProductCategoriesRequest())
    },

    delProduct: (productId) => {
      dispatch(deleteProductRequest(productId))
    },

    sendPage: (page) => {
      dispatch(selectPageRequest(page))
    }
  }
}

Products.propTypes = {
  products: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)