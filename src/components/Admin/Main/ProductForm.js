import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import validator from 'validator';
import uploadApi from '../../../utils/uploadApi';
import { UPLOAD_PRESET, UPLOAD_IMAGE_URL } from '../../../constants/config';
import { 
  addProductRequest,
  fetchProductCategoriesRequest,
  fetchProductByIdRequest,
  editProductByIdRequest,
  openAlert,
} from '../../../actions/product';
import ModalSample from '../../ModalSample';
import Loading from '../../Loading';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      modalAction: false,
      redirect: false,
      error: false,
      isEditPage: false,
      selectedProduct: [],
      selectedProductId: null,
      isLoading: false,

      state: {
        value: 0,
      },

      stock: {
        value: 0,
      },

      special: {
        value: 0,
      },

      name: {
        value: '',
        error: ''
      },

      image: {
        value: '',
        error: '',
        url:''
      },

      price: {
        value: '',
        error: ''
      },

      category: {
        value: '',
        error: ''
      },

      description: {
        value: '',
        error: ''
      },
    };

    this.defaultState = this.state;

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeAvatar = this.onChangeAvatar.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.onBlurInput = this.onBlurInput.bind(this);
    this.editStateValue = this.editStateValue.bind(this);
    this.setSelectedProduct = this.setSelectedProduct.bind(this);
    this.setError = this.setError.bind(this);
    this.getModalAction = this.getModalAction.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    this.setItem('isLoading', true);
    this.props.fetchCategories();

    const { match } = this.props;

    if (match) {
      const { productId } = match.match.params;

      if (productId) {
        this.setState({isEditPage: true, selectedProductId: productId});
        this.props.fetchProductInfo(productId);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setItem('isLoading', false);
    const { selectedProduct } = nextProps.products;

    if (selectedProduct.length === 1 && this.state.isEditPage) {
      this.setSelectedProduct(selectedProduct); 
    }
  }
  
  setSelectedProduct(selectedProduct) {
    if (selectedProduct[0]) {
      this.setState(prevState => ({
        state: {
          ...prevState.state,
          value: selectedProduct[0].state
        },
  
        special: {
          ...prevState.special,
          value: selectedProduct[0].special
        },
  
        stock: {
          ...prevState.stock,
          value: selectedProduct[0].stock
        },
  
        name: {
          ...prevState.name,
          value: selectedProduct[0].name
        },
  
  
        price: {
          ...prevState.price,
          value: selectedProduct[0].price
        },
  
  
        category: {
          ...prevState.category,
          value: selectedProduct[0].category_id
        },
  
        description: {
          ...prevState.description,
          value: selectedProduct[0].description
        },
  
        image: {
          ...prevState.image,
          url: selectedProduct[0].image_url
        }
  
      }));
    }
  }

  setItem(stateName, value) {
    this.setState({
      [stateName]: value
    });
  }

  editStateValue(name, value, valueName = 'value') {
    this.setState(prevState => ({
      [name]: {
          ...prevState[name],
          [valueName]: value       // update the value of specific key
      }
    }));
  }

  setError() {
    this.setItem('error', true);
  }

  onChangeInput(e) {
    const { name, type } = e.target;
    let { value } = e.target;

    value = (type === 'radio') ? parseInt(value) : value;

    this.editStateValue(name, value);
  }

  onChangeAvatar(e) {
    const { name } = e.target;
    const image = e.target.files[0];

    this.editStateValue(name, image);
  }

  setRedirect() {
    this.setItem('redirect', true);
  }

  uploadImage() {
    const { image } = this.state;

    const formData = new FormData();
    formData.append('file', image.value);
    formData.append('upload_preset', UPLOAD_PRESET);

    return uploadApi(UPLOAD_IMAGE_URL, 'post', formData)
    .then(res => {
      const { data } = res;

      this.editStateValue('image', data.secure_url, 'url');
    })
  }

  submitForm() {
    const { 
      name,
      image,
      price,
      category,
      description,
      state,
      stock,
      special,
      isEditPage,
      selectedProductId
    } = this.state;

    if (image.url) {
      const data = {
        name: name.value,
        price: price.value,
        category_id: category.value,
        state: state.value,
        stock: stock.value,
        special: special.value,
        description: description.value,
        image_url: image.url
      };

      if (isEditPage) {
        this.props.updateProduct(data, selectedProductId);
      }
      else {
        this.props.addingProduct(data);
      }
    }
  }

  resetForm() {
    this.setState(()=> this.defaultState);
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

  openModal() {
    this.setItem('openModal', true);
  }

  getModalAction(action) {
    this.setState({
      modalAction: action,
      openModal: false
    }, () => this.addProductAction(action))
  }

  addNewProduct(e) {
    e.preventDefault();
    this.openModal();
  }

  addProductAction(action) {
    if (action) {
      const { 
        name,
        image,
        price,
        category,
        description,
      } = this.state;
  
      if (name.value && price.value && category.value && description.value) {
        if (image.value) {
          this.uploadImage()
          .then(this.submitForm)
          .then(this.props.turnAlertOn)
          .then(this.setRedirect)
        }
      
        else {
          if (image.url){
            this.submitForm();
            this.props.turnAlertOn();
            this.setRedirect();
          }
          else {
            this.setItem('error', true);
          }
        }
      }
      
      else {
        this.setItem('error', true);
      }
    }
  }

  onBlurInput(e) {
    const { value, name } = e.target;
    const isValueEmpty = this.isEmptyInput(value);

    this.editStateValue(name, isValueEmpty, 'error');
  }

  onBlurOptions(e) {
    const { value, name } = e.target;
    const isValueEmpty = this.isEmptyOption(value);

    this.editStateValue(name, isValueEmpty, 'error');
  }

  isEmptyInput(request) {
    return validator.isEmpty(request);
  }

  isEmptyOption(request) {
    if (parseInt(request) === 0) return true;
    return false;
  }

  renderErrorText(name) {
    if ((this.state.error && !this.state[name].value)|| this.state[name].error) {
      return (
        <p className="text-danger">This field is required</p>
      );
    }
    return '';
  }

  renderInputText(label, name) {
    return (
      <div className="col">
        <label className="input-label" htmlFor={`product_${name}`}>{label}</label>
        <input
          type="text"
          className="form-control"
          name={name}
          id={`product_${name}`}
          placeholder={`Product ${name}...`}
          value={this.state[name].value}
          onChange={(e) => this.onChangeInput(e)}
          onBlur={(e) => this.onBlurInput(e)}
        />
        {this.renderErrorText(name)}
      </div>
    );
  }

  renderCategories(label, name, data) {
    if (data.length > 0) {
      return (
        <div className="col">
          <label className="input-label" htmlFor="product_category">{label}</label><br />
          <select 
            className="form-control"
            name={name}
            value={this.state[name].value}
            onChange={(e) => this.onChangeInput(e)}
            onBlur={(e) => this.onBlurOptions(e)}
          >
            <option value="0">Select Category</option>
           {this.renderCateOptions(data)}
          </select>
          {this.renderErrorText(name)}
        </div>
      );
    }
    
    return '';
  }

  renderCateOptions(data) {
    return (
      data.map((category, index) => {
        return (
          <option value={category.id} key={index+1}>{category.name}</option>
        );
      })
    );
  }

  renderRadioOption(label, name, id, value) {
    return (
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={this.state[name].value === value}
          onChange={(e) => this.onChangeInput(e)}
        />
        <label className="form-check-label" htmlFor={id}>{label}</label>
      </div>
    );
  }
  
  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/products" />
    }

    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div className="input-form mt-3">
        <form>
          <div className="form-row form-group">
            {/* Product name */}
            {this.renderInputText('product name', 'name')}

            {/* Product image */}
            <div className="col">
              <label className="input-label" htmlFor="product_image_input">product image</label>
              <input
                type="file"
                className="form-control-file"
                name="image"
                id="product_image_input"
                onChange={(e) => this.onChangeAvatar(e)}
              />
              {this.renderErrorText("image")}
            </div>
          </div>
          <div className="form-row form-group">
            {/* Product price */}
            {this.renderInputText('product price', 'price')}

            {/* Product category */}
            {this.renderCategories('product category', 'category', this.props.categories)}
          </div>
          <div className="form-row">
            <div className="col">
              <label className="input-label">product state</label><br />

              {/* Product state */}
              {this.renderRadioOption('Old', 'state', 'oldState', 0)}
              {this.renderRadioOption('New', 'state', 'newState', 1)}

            </div>

            <div className="col">
              <label className="input-label">in stock</label><br />
              {/* Product in stock */}
              {this.renderRadioOption('Yes', 'stock', 'inStock', 1)}
              {this.renderRadioOption('No', 'stock', 'notInStock', 0)}
            </div>

            <div className="col">
              <label className="input-label">special product</label><br />
              {/* Product  */}
              {this.renderRadioOption('Yes', 'special', 'isSpecial', 1)}
              {this.renderRadioOption('No', 'special', 'isNotSpecial', 0)}
            </div>
          </div>
          <div className="form-group mt-3">
            <label className="input-label" htmlFor="product_description">product description</label>
            <textarea
              className="form-control"
              id="product_description"
              name="description"
              rows={3}
              value={this.state.description.value}
              onChange={(e) => this.onChangeInput(e)}
              onBlur={(e) => this.onBlurInput(e)}
            />
            {this.renderErrorText("description")}
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => this.addNewProduct(e)} 
          >{(this.state.isEditPage) ? 'edit' : 'add'}
          </button>
          <button
            type="reset"
            className="btn btn-secondary"
            onClick={(e) => this.resetForm()}
            data-target="#exampleModal"  
          >
            reset
          </button>
        </form>
        {this.renderModal()}
      </div>
    );
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
    addingProduct: (data) => {
      dispatch(addProductRequest(data))
    },

    fetchCategories: () => {
      dispatch(fetchProductCategoriesRequest())
    },

    fetchProductInfo: productId => {
      dispatch(fetchProductByIdRequest(productId))
    },

    updateProduct: (data, id) => {
      dispatch(editProductByIdRequest(data, id));
    },

    turnAlertOn: () => {
      dispatch(openAlert());
    },
  }
}

ProductForm.propTypes = {
  categories: PropTypes.array.isRequired,
  products: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
