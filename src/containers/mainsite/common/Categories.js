import React, { Component } from 'react';
import Categories from '../../../components/MainSite/common/Categories';
import { connect } from 'react-redux';
import * as mainProductActions from '../../../actions/mainProduct';
import { bindActionCreators } from 'redux';

class CategoryContainer extends Component {
    componentDidMount() {
        const { productActions } =  this.props;
        const { fetchCategories } = productActions;
        fetchCategories();
    }
    
    render() {
        const { categories } = this.props;

        if (categories.length > 0 ) {
            return (
                <Categories categories={categories} />
            )
        }
        return '';  
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productActions: bindActionCreators(mainProductActions, dispatch)
    };
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);