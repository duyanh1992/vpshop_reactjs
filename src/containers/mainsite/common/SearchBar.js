import React, { Component } from 'react'
import SearchBar from '../../../components/MainSite/common/SearchBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from './../../../actions/modal';

class SearchBarContainer extends Component {
    render() {
        const { modalFunctions, users, modal } = this.props;

        return (
            <SearchBar
                setToggleModal={modalFunctions.setToggleModal}
                setToggleModalConfirm={modalFunctions.setToggleModalConfirm}
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
        modalFunctions: bindActionCreators(modalActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
