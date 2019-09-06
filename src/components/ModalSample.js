import React, { Component } from 'react';
import { 
  Button,
  Modal,
  ModalHeader,
  ModalFooter
} from 'reactstrap';

class ModalSample extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modal}>
        <ModalHeader>
          <b>Do you really want to do this action?</b>
        </ModalHeader>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => this.props.getModalAction(true)}
          >
            Yes, I do
          </Button>
          <Button
            color="secondary"
            onClick={() => this.props.getModalAction(false)}
          >
              Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalSample;