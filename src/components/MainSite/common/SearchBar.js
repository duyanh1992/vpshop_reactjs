import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        }
    }

    static getDerivedStateFromProps(nextProps) {
        if (localStorage.hasOwnProperty('currentUser')) {
            return {
                isSignedIn: true,
            };
        }

        return null;
    }

    render() {
        const { isSignedIn } = this.state;
        let userContent = 'User';
        let userNameStyle = {};

        if(isSignedIn) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            userContent = currentUser[0].name;
            userNameStyle = {color: 'red'};
        }

        return (
            /* Search bar */
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
                        <Link className="dropdown-item" to="#a">Sign out</Link>
                    </div>  
                </div>
            </div>
            /* End search bar */
        )
    }
}
