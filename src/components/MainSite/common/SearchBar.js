import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ModalSample2 from '../../../containers/ModalSample2';
import { message } from '../../../constants/message';
import AlertMessage2 from './../../AlerMessage2';

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

const Dropdown = styled.div`
    text-align: right;
    display: flex;
    justify-content: center;
`;

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
            modalOpen: false,
            searchText: '',
            searchError: false
        }
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.modal.isOpen && nextProps.modal.confirmType === "signOut") {
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
        if (currentUser) this.setState({ isSignedIn: true });
    }

    componentDidUpdate() {
        const { isSignedIn } = this.state;
        const { modal } = this.props;

        if (modal.isConfirm && isSignedIn && modal.confirmType === 'signOut') {
            localStorage.removeItem('currentUser');
            window.location.reload();
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.searchTimeout);
    }


    logOut(e) {
        e.preventDefault();

        this.props.setToggleModal(true, 'signOut');
    }

    handleChange(e) {
        const { value } = e.target;

        this.setState({ searchText: value });
    }

    searchProduct(e) {
        const { searchText } = this.state;
        if (!searchText) {
            e.preventDefault();

            this.setState({ searchError: true }, () => {
                this.searchTimeout = window.setTimeout(() => {
                    this.setState({ searchError: false });
                }, 3000);
            });
        }

        else {
            this.props.searchProductByName(searchText);
        }
    }

    renderModal() {
        const { modalOpen } = this.state;

        if (modalOpen) {
            return <ModalSample2 confirmType="signOut" />;
        }

        return null;
    }

    renderAlertMessage() {
        const { searchError } = this.state;

        return <AlertMessage2
            content={message.form.searchError}
            isOpen={searchError}
            type="danger"
        />
    }

    render() {
        const { isSignedIn } = this.state;
        const { users } = this.props;
        let userContent = 'User';
        let userNameStyle = {};

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (isSignedIn) {
            userContent = currentUser ? currentUser[0].name : users.currentUser[0].name;
            userNameStyle = { color: 'red' };
        }

        return (
            /* Search bar */
            <div>
                <div className="row mb-md-4 mb-2 mb-md-3 d-flex justify-content-between">
                    <div className="col-md-3 col-12">
                        <div className="input-group search-bar">
                            <Link to={`/product-list/${this.state.searchText}`} style={{ textDecoration: 'none' }}>
                                <SearchIcon
                                    onClick={(e) => this.searchProduct(e)}
                                    className="input-group-prepend search-icon"
                                    style={{ height: '100%' }}
                                >
                                    <span className="input-group-text search-btn" id="basic-addon1">
                                        <i className="fas fa-search" />
                                    </span>
                                </SearchIcon>
                            </Link>
                            <SearchBox
                                type="text"
                                className="form-control search-box"
                                placeholder="Product name"
                                value={this.state.searchText}
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                    </div>
                    <Dropdown className="dropdown mr-md-2 col-md-2 col-12">
                        <a className="nav-link dropdown-toggle text-secondary font-weight-bold" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Welcome <span style={userNameStyle}>{userContent}</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {!isSignedIn &&
                                <div>
                                    <Link className="dropdown-item" to="/sign-up">Sign up</Link>
                                    <Link className="dropdown-item" to="/sign-in">Sign in</Link>
                                </div>
                            }

                            {isSignedIn &&
                                <div>
                                    <Link className="dropdown-item" to="/cart">My cart</Link>
                                    <Link className="dropdown-item" to="" onClick={e => this.logOut(e)}>Sign out</Link>
                                </div>
                            }
                        </div>
                    </Dropdown>
                </div>
                {this.renderAlertMessage()}

                {this.renderModal()}
            </div>
            /* End search bar */
        )
    }
}
