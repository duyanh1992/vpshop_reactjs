import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap';

class AlertMessage extends Component {
  render() {
    return (
      <div>
         <UncontrolledAlert>
          <h4 className="alert-heading">Well done!</h4>
          <p>
            {this.props.content}
          </p>
        </UncontrolledAlert>
      </div>
    );
  }
}

export default AlertMessage;