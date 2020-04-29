import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ModalSample2 from '../../../containers/ModalSample2';

const SearchIcon = styled.div`
    cursor: pointer;

    .search-btn {
        background: #840000;
        border:none;
	    border-radius: 0;
        
        .fa-search {
            color: #b18282;
        }
    }
`;

const SearchBox = styled.input`
    border: none;
    border-radius: 0;
    border: 1px solid #CDCDCD;
`;

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
            modalOpen: false,
        }
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.modal.isOpen) {
            return {
                modalOpen: true,
            };
        }

        if (nextProps.users.currentUser.length > 0) {
            return {
                isSignedIn: true,
            };
        }

        return null;
    }

    componentDidMount() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser) this.setState({ isSignedIn: true});
    }

    componentDidUpdate() {
        const { isSignedIn } = this.state;
        const { modal } = this.props;

        if(modal.isConfirm && isSignedIn && modal.confirmType === 'signOut') {
            localStorage.removeItem('currentUser');
            window.location.reload(); 
        }
    }
    
    logOut(e) {
        e.preventDefault();

        this.props.setToggleModal(true);
    }

    renderModal() {
        const { modalOpen } = this.state;

        if(modalOpen) {
            return <ModalSample2 confirmType="signOut" /> ;
        }

        return null;
    }

    render() {
        const { isSignedIn } = this.state;
        const { users } = this.props;
        let userContent = 'User';
        let userNameStyle = {};

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(isSignedIn) {
            userContent = currentUser ? currentUser[0].name : users.currentUser[0].name;
            userNameStyle = {color: 'red'};
        }

        return (
            /* Search bar */
            <div>
                <div className="row mb-4 d-flex justify-content-between">
                    <div className="col-md-3">
                        <div className="input-group search-bar">
                            <SearchIcon className="input-group-prepend search-icon">
                                <span className="input-group-text search-btn" id="basic-addon1">
                                    <i className="fas fa-search" />
                                </span>
                            </SearchIcon>
                            <SearchBox type="text" className="form-control search-box" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="dropdown mr-3">
                        <a className="nav-link dropdown-toggle text-secondary font-weight-bold" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome <span style={userNameStyle}>{userContent}</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            { !isSignedIn &&
                                <div>
                                    <Link className="dropdown-item" to="/sign-up">Sign up</Link>
                                    <Link className="dropdown-item" to="/sign-in">Sign in</Link>
                                </div>
                            }
                            <Link className="dropdown-item" to="/cart">My cart</Link>
                            <Link className="dropdown-item" to="" onClick={e => this.logOut(e)}>Sign out</Link>
                        </div>
                    </div>
                </div>

                {this.renderModal()}
            </div>
            /* End search bar */
        )
    }
}
