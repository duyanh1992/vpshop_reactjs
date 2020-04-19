import React, { Component } from 'react'
import SignForm from '../../components/MainSite/SignForm';
import { connect } from 'react-redux';

class SignUpContainer extends Component {
    render() {
        return (
            <SignForm match={this.props.match} />
        );
    }
}


export default connect(null, null)(SignUpContainer);
