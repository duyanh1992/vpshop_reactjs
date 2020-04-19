import React, { Component } from 'react'
import SignForm from '../../components/MainSite/SignForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import * as userActions from '../../actions/user';

class SignUpContainer extends Component {
    render() {
        const { modalFunctions, userFunctions, modal, users } = this.props;
        return (
            <SignForm
                setToggleModal={modalFunctions.setToggleModal}
                signUp={userFunctions.signUp}
                modalConfirmed={modal.isConfirm}
                newUser={users.newUser}
                match={this.props.match}
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
        modalFunctions: bindActionCreators(modalActions, dispatch),
        userFunctions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
