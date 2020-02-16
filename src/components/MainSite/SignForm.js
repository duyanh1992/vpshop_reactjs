import React, { Component } from 'react'
import styled from 'styled-components';
import Title from '../../theme/styles/Title';

const FormStyle = styled.div`
    label {
        font-weight: bold;
    }

    input {
        border-radius: 20px;
    }

    button[type="submit"] {
        text-transform: capitalize;
        border-radius: 20px;
        padding: 5px 15px;
    }
`;

export default class SignForm extends Component {
    render() {
        return (
            /* Form */
            <div className="col-md-9">
                <div className="form-title mb-4">
                    <Title className="title">user sign up</Title>
                </div>
                <FormStyle className="sign-form">
                    <form>
                        <div className="container">
                            <div className="form-group row">
                                <label htmlFor="user-name" className="col-md-2 col-form-label">Name</label>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="user-name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="user-password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control" id="user-password" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="user-email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control" id="user-email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 offset-2">
                            <button type="submit" className="btn btn-primary">sign up</button>
                        </div>
                    </form>
                </FormStyle>
            </div>
            /* End form */
        )
    }
}
