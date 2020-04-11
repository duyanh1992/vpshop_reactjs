import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalSample2 = ({isOpen, setToggleModal}) => {
  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalBody>
            <b>Are you sure?</b>  
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{' '}
          <Button 
            color="secondary"
            onClick={() => setToggleModal(false)}
          >Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalSample2;
