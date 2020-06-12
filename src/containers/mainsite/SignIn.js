import React, { Component } from 'react'
import SignForm from '../../components/MainSite/SignForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from './../../actions/user';
import * as modalActions from '../../actions/modal';

class SignInContainer extends Component {
    render() {
        const { userFunctions, modalFunctions, modal, users } = this.props;

        return (
            <SignForm
                match={this.props.match}
                signIn={userFunctions.signIn}
                setToggleModal={modalFunctions.setToggleModal}
                modalConfirmed={modal.isConfirm}
                setToggleModalConfirm={modalFunctions.setToggleModalConfirm}
                users={users}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        users: state.users
    };
}

const mapDispatchToProps = dispatch => {
    return {
        userFunctions: bindActionCreators(userActions, dispatch),
        modalFunctions: bindActionCreators(modalActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
