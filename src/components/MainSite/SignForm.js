import React, { Component } from 'react'
import styled from 'styled-components';
import Title from '../../theme/styles/Title';
import validator from 'validator';
import { message } from '../../constants/message';
import AlertMessage2 from '../../components/AlerMessage2';
import ModalSample2 from '../../containers/ModalSample2';
import { Redirect } from 'react-router-dom';

const FormStyle = styled.div`
    label {
        font-weight: bold;
        text-transform: capitalize;
    }

    input { border-radius: 20px; }

    span.error-message { color: red }

    button[type="submit"], button[type="reset"] {
        text-transform: capitalize;
        border-radius: 20px;
        padding: 5px 15px;
    }
`;

export default class SignForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeOutPoint: null,
            isLoggedIn: false,
            error: false,
            success: false,
            name: {
                value: '',
                error: false
            },

            email: {
                value: '',
                error: false,
                isNotEmail: false
            },

            password: {
                value: '',
                error: false
            }
        }

        this.defaultState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.checkIfStringIsEmpty = this.checkIfStringIsEmpty.bind(this);
        this.editState = this.editState.bind(this);
        this.setItem = this.setItem.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    static getDerivedStateFromProps(nextProps) {
        if(nextProps.newUser && nextProps.newUser.length > 0) {
            return {
                success: true,
            };
        }

        return null;
    }

    componentDidUpdate() {
        const { modalConfirmed } = this.props;

        if(modalConfirmed) {
            const { name, email, password } = this.state;

            const signUpData = {
                name: name.value,
                email: email.value,
                password: password.value,
                level: 2
            };

            this.props.signUp(signUpData);
        }

        if(this.state.success) {
            this.timeOutPoint = window.setTimeout(() => {
                this.setState({isLoggedIn: true});
            }, 6000)
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutPoint);
    }

    setItem(name, value) {
        this.setState({ [name]: value });
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

    onSubmit(e) {
        e.preventDefault();
        const { name, email, password } = this.state;

        if(
            !name.error 
            && !email.error
            && !password.error
            && !email.isNotEmail
            && email.value
            && name.value
            && password.value
        ) {
           this.props.setToggleModal(true);
        }
        else {
            this.setState({error: true}, () => {
                window.setTimeout(() => {
                    this.setState({error:false});
                }, 6000)
            })
        }
    }

    resetForm() {
        this.setState(() => this.defaultState);
    }

    checkIfStringIsEmpty(name, str) {
        const result = validator.isEmpty(str);
        this.editState(name, result, 'error');
    }

    checkIfStringIsEmail(name, str) {
        if (name === 'email') {
            const result = validator.isEmail(str);
            this.editState(name, !result, 'isNotEmail');
        }
    }

    renderInputErrorMessage(name) {
        if(this.state[name].error) {
            return (
                <span className="error-message">{message.form.require}</span>
            );
        }

        if(name === 'email' && this.state[name].isNotEmail) {
            return (
                <span className="error-message">{message.form.email}</span>
            );
        }
    }

    renderInputText(name, type) {
        const { match } = this.props;
        
        if(name === 'email' && match.path === '/sign-in') return '';

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

    renderAlertMessage() {
        const { error, success } = this.state;
        const errorMes = "Check the information you have filled in";
        const successSignUpMes = "Sign Up successfully ! Sign In again. System will redirect automatically !";

        return (error || success) ? <AlertMessage2
                            content={error ? errorMes : successSignUpMes}
                            isOpen={error || success}
                            type={ error ? "danger" : 'success'}
                        /> : '';
    }

    renderModal() {
        return <ModalSample2 /> ;
    }

    render() {
        const { isLoggedIn } = this.state;
        const { match } = this.props;

        const formType = (match.path === '/sign-up' ? 'sign up' : 'sign in');

        if(isLoggedIn)
            return <Redirect to='/sign-in' />;

        return (
            /* Form */
            <div className="col-md-9">
                <div className="form-title mb-4">
                    <Title className="title">{`user ${formType}`}</Title>
                </div>

                {this.renderAlertMessage()}

                <FormStyle className="sign-form">
                    <form>
                        <div className="container">
                            {this.renderInputText('name', 'text')}
                            {this.renderInputText('password', 'password')}
                            {this.renderInputText('email', 'text')}
                        </div>
                        <div className="col-md-12 offset-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={e => this.onSubmit(e)}
                            >
                            {`${formType}`}
                            </button>

                            <button
                                type="reset"
                                className="btn btn-secondary"
                                onClick={this.resetForm}
                            >
                            reset
                            </button>
                        </div>
                    </form>
                </FormStyle>

                {this.renderModal()}
            </div>
            /* End form */
        )
    }
}
