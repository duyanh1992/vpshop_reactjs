import React, { Component } from 'react'
import SignForm from '../../components/MainSite/SignForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

class SignFormContainer extends Component {
    render() {
        const { modalFunctions } = this.props;
        return (
            <SignForm setToggleModal={modalFunctions.setToggleModal} />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalFunctions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SignFormContainer);
