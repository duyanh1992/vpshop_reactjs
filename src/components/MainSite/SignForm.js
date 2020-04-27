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
            isSignedUp: false,
            isSignedIn: false,
            isSignUpPage: true,
            signInSuccess: false,
            error: false,
            signUpSuccess: false,
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
        this.setError = this.setError.bind(this);
    }

    componentDidMount() {
       this.setSignPageType();
    }

    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.newUser && nextProps.newUser.length > 0) {
            return {
                signUpSuccess: true,
            };
        }

        if(!state.isSignUpPage && nextProps.users.currentUser.length > 0 && !state.error) {
            return { 
                signInSuccess: true,
            };
        }

        if(!state.isSignUpPage && nextProps.users.didCheckLogin){
            if (nextProps.users.currentUser.length <= 0) {
                return { error: true};
            }

            return { error: false};
        }

        return null;
    }

    componentDidUpdate() {
        const { modalConfirmed, users } = this.props;
        const { isSignUpPage } = this.state;

        if(modalConfirmed) {
            this.props.setToggleModalConfirm(false);

            if(isSignUpPage) {
                const { name, email, password } = this.state;

                const signUpData = {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    level: 2
                };

                this.props.signUp(signUpData);
            }

            else {
                const { name, password } = this.state;

                const signInData = {
                    name: name.value,
                    password: password.value,
                };

                this.props.signIn(signInData);
            }
        }

        if(this.state.signUpSuccess) {
            this.timeOutPoint = window.setTimeout(() => {
                this.setState({isSignedUp: true});
            }, 6000)
        }

        if(this.state.signInSuccess) {
            this.timeOutPoint = window.setTimeout(() => {
                localStorage.setItem('currentUser', JSON.stringify(users.currentUser));
                this.setState({isSignedIn: true});
            }, 6000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutPoint);
        this.props.setToggleModalConfirm(false);
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

    setError() {
        this.setState({error: true}, () => {
            window.setTimeout(() => {
                this.setState({error:false});
            }, 6000)
        })
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
        const { isSignUpPage,  } = this.state;

        if(
            !name.error 
            && !email.error
            && !password.error
            && !email.isNotEmail
            && email.value
            && name.value
            && password.value
            && isSignUpPage
        ) {
            this.props.setToggleModal(true);
        }

        else if (
            !name.error 
            && !password.error
            && name.value
            && password.value
            && !isSignUpPage
        ) {
            this.props.setToggleModal(true);
        }

        else {
            this.setError();
        }
    }

    resetForm() {
        this.setState(() => this.defaultState);
        this.setSignPageType();
    }

    setSignPageType() {
        const { match } = this.props;
        if(match.path === '/sign-in') this.setItem('isSignUpPage', false);
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
        const { error, signUpSuccess, signInSuccess } = this.state;
        const errorMes = "Check the information you have filled in";
        const successSignUpMes = "Sign Up successfully ! Sign In again. System will redirect automatically !";
        const successSignInMes = "Sign In successfully ! System will redirect automatically !";

        const content = error ? errorMes : (signUpSuccess ? successSignUpMes : successSignInMes)

        return (error || signUpSuccess || signInSuccess) 
                        ? <AlertMessage2
                            content={content}
                            isOpen={error || signUpSuccess || signInSuccess}
                            type={ error ? "danger" : 'success'}
                        /> 
                        : '';
    }

    renderModal() {
        return <ModalSample2 /> ;
    }

    render() {
        const { isSignedUp, isSignedIn } = this.state;
        const { match } = this.props;

        const formType = (match.path === '/sign-up' ? 'sign up' : 'sign in');

        if(isSignedUp)
            return <Redirect to='/sign-in' />;
        
        if(isSignedIn)
            return <Redirect to='/' />;

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
