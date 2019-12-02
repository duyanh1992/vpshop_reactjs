import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import ModalSample from '../../ModalSample';
import AlertMessage from '../../AlertMessage';
import Loading from '../../Loading';
import 
{ 
  fetchProductsRequest,
  fetchProductCategoriesRequest,
  deleteProductRequest,
  selectPageRequest,
  openAlert
} from '../../../actions/product';

const rowPerPage = 2;

class Products extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      openModal: false,
      modalAction: false,
      alertOpen: false,
      productId: null,
      isLoading: true
    };

    this.getModalAction = this.getModalAction.bind(this);
    this.openModal = this.openModal.bind(this);
    this.openAlert = this.openAlert.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();

    if (this.props.products.updated) {
      this.openAlert();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setItem('isLoading', false);

    if (nextProps.products.updated) {
      this.openAlert();
    }
  }
  
  renderModal() {
    if (this.state.openModal) {
      return (
        <ModalSample 
          modal={this.state.openModal}
          getModalAction={this.getModalAction}
        />
      );
    }
    return '';
  }

  setItem(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }

  openModal() {
    this.setItem('openModal', true);
  }

  openAlert() {
    this.setItem('alertOpen', true);
  }

  getModalAction(action) {
    this.setState({
      modalAction: action,
      openModal: false
    }, () => this.delAction(action))
  }

  delProduct(productId) {
    this.setState({
      productId,
      alertOpen: false
    });

    this.openModal();
  }

  delAction(action) {
    if (action) {
      const { productId } = this.state;
      if (parseInt(productId) > 0) {
        this.props.delProduct(productId);
        this.props.turnAlertOn();
      }
    }
  }
  
  selectPage() {
    this.props.sendPage(this.props.products.page - 1);
  }

  renderPrdList() {
    const { categories, products } = this.props;
    const { productList } = products;

    if (productList.length > 0 && categories.length > 0) {
      return (
        <div>
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
          {this.renderModal()}
        </div>
      );
    }
    return (
      <h4 className="text-center">No product to show</h4>
    );
  }

  renderProduct() {
    const { page } = this.props.products;
    const { categories, products } = this.props;
    const { productList } = products;

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

  renderAlertMessage() {
    return (this.state.alertOpen) ? <AlertMessage content="Updating product list successfully !!!" /> : '';
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    else {
        return (
          <div className="product-list">
            {this.renderAlertMessage()}

            <div className="add-new-block">
              <Link className="add-new-button mt-3 mb-3 btn btn-danger" to="/admin/add">Add new Product</Link>
            </div>
          
            <div className="table-responsive">
              {this.renderPrdList()}
            </div>
            
            <Pagination />
          </div>
        );
    }
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
    },

    turnAlertOn: () => {
      dispatch(openAlert());
    },
  }
}

Products.propTypes = {
  products: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)