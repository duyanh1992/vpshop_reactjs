import React from 'react';
import { Alert } from 'reactstrap';

const AlerMessage2 = (props) => {
  return (
    <Alert color={props.type} isOpen={props.isOpen}>
        {props.content}
    </Alert>
  );
};

export default AlerMessage2;