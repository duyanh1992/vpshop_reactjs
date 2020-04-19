import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalSample2 = ({isOpen, setToggleModal, setToggleModalConfirm}) => {
  return (
    <div>
      <Modal isOpen={isOpen}>
        <ModalBody>
            <b>Are you sure?</b>  
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => { setToggleModal(false); setToggleModalConfirm(true); }}
          >Confirm
          </Button>{' '}

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
