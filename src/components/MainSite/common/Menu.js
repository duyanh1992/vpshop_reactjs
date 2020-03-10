import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color from '../../../theme/color';

const MenuStyle = styled.div`
    border-top: 3px solid ${color.color};
    border-bottom: 1px solid ${color.gray};

    .navbar {
        padding: 0;
    }

    .nav-item {
        padding: 0 10px;
        border-right: 1px solid ${color.gray};
    }

    .nav-item .nav-link, .dropdown .nav-link, .dropdown-item {
        color: ${color.black};
        font-weight: bold;
    }

    .menu-active {
        background: ${color.black};
    }

    .text-menu-active {
        color: ${color.white};
    }

    .nav-item:hover .nav-link {
        color: ${color.white};
    }

    .nav-item:hover {
        background: ${color.black};
    }

    .dropdown-item {
        font-weight: normal;
    }
`;

export default class Menu extends Component {
    render() {
        return (
            /* Menu */
            <MenuStyle className="menu">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item menu-active">
                                <Link className="nav-link text-white" to="/main-products">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Manage user</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">Website</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </MenuStyle>
            /* End menu */
        )
    }
}
