import React, { Component } from 'react'
import styled from 'styled-components';
import Title from '../../theme/styles/Title';
import validator from 'validator';
import { message } from '../../constants/message';

const FormStyle = styled.div`
    label {
        font-weight: bold;
        text-transform: capitalize;
    }

    input { border-radius: 20px; }

    span.error-message { color: red }

    button[type="submit"] {
        text-transform: capitalize;
        border-radius: 20px;
        padding: 5px 15px;
    }
`;

export default class SignForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: {
                value: '',
                error: ''
            },

            email: {
                value: '',
                error: '',
                isEmail: false
            },

            password: {
                value: '',
                error: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.checkIfStringIsEmpty = this.checkIfStringIsEmpty.bind(this);
        this.editState = this.editState.bind(this);
    }

    editState(stateName, value, valueName = 'value') {
        this.setState(prevState => ({
            [stateName]: {
                ...prevState[stateName],
                [valueName]: value
            }
        }));
    }

    handleChange(e, name) {
        const { value } = e.target;
        this.editState(name, value);
    }

    handleBlur(e, name) {
        const { value } = e.target;
        this.checkIfStringIsEmpty(name, value);
        this.checkIfStringIsEmail(name, value);
    }

    checkIfStringIsEmpty(name, str) {
        const result = validator.isEmpty(str);
        this.editState(name, result, 'error');
    }

    checkIfStringIsEmail(name, str) {
        const result = validator.isEmail(str);
        this.editState(name, !result, 'isEmail');
    }

    renderInputErrorMessage(name, type) {
        if(this.state[name].error) {
            return (
                <span class="error-message">{message.form.require}</span>
            );
        }

        if(name === 'email' && this.state[name].isEmail) {
            return (
                <span class="error-message">{message.form.email}</span>
            );
        }
    }

    renderInputText(name, type) {
        const inputBorder = this.state[name].error ? 'red' : '#ced4da';

        return (
            <div className="form-group row">
                <label className="col-md-2 col-form-label">{name}</label>
                <div className="col-md-6">
                    <input
                        type={type}
                        className={`form-control`}
                        style={{borderColor: inputBorder}}
                        value={this.state[name].value}
                        onChange={e => this.handleChange(e, name)}
                        onBlur={e => this.handleBlur(e, name)}
                    />
                    {this.renderInputErrorMessage(name, type)}
                </div>
            </div>
        );
    }

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
                            {this.renderInputText('name', 'text')}
                            {this.renderInputText('password', 'password')}
                            {this.renderInputText('email', 'text')}
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
