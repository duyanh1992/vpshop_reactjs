import React, { Component } from 'react'
import SearchBar from '../../../components/MainSite/common/SearchBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from './../../../actions/modal';
import * as mainProductActions from './../../../actions/mainProduct';

class SearchBarContainer extends Component {
    render() {
        const { modalFunctions, users, modal, mainProductFunctions } = this.props;

        return (
            <SearchBar
                setToggleModal={modalFunctions.setToggleModal}
                setToggleModalConfirm={modalFunctions.setToggleModalConfirm}
                searchProductByName={mainProductFunctions.searchProductByName}
                searchProductByNameSuccess={mainProductFunctions.searchProductByNameSuccess}
                users={users}
                modal={modal}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        modal: state.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        modalFunctions: bindActionCreators(modalActions, dispatch),
        mainProductFunctions: bindActionCreators(mainProductActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
