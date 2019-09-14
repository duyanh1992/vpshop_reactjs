import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

class Loading extends Component {
  render() {
    return (
      <center>
        <Spinner
          color="secondary"
          style={{ width: '3rem', height: '3rem'}}
        />
      </center>
    );
  }
}

export default Loading;

