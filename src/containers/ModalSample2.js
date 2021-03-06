import React, { Component } from 'react';
import ModalSample2 from '../components/ModalSample2';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from './../actions/modal';

class ModalSample2Container extends Component {
    render() {
        const { modal, modalFunctions, confirmType } = this.props;

        return (
            <ModalSample2 
                isOpen={modal.isOpen}
                setToggleModal={modalFunctions.setToggleModal}
                setToggleModalConfirm={modalFunctions.setToggleModalConfirm}
                confirmType={confirmType}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalFunctions: bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSample2Container);
