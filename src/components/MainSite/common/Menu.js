import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color from '../../../theme/color';
import AlertMessage2 from './../../AlerMessage2';

const MenuStyle = styled.div`
    border-top: 3px solid ${color.color};
    border-bottom: 1px solid ${color.gray};
    margin-bottom: 10px;

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
    constructor(props) {
        super(props);

        this.state = {
            openAlert: false,
        };
    }

    setOpenAlert() {
        this.setState({ openAlert: true }, () => {
            this.alertTimeout = window.setTimeout(() => {
                this.setState({ openAlert: false })
            }, 6000);
        });
    }

    componentWillUnmount() {
        window.clearTimeout(this.alertTimeout);
    }


    renderMessage() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const { openAlert } = this.state;

        if ((!currentUser || currentUser[0].level !== 1) && openAlert) {
            const content = 'You do not have a role to acccess admin page !';

            return <AlertMessage2
                content={content}
                isOpen={true}
                type="danger"
            />
        }

        return '';
    }

    render() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const adminLink = (!currentUser || currentUser[0].level !== 1) ? '' : "/admin"

        return (
            /* Menu */
            <div>
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
                                <li className="nav-item" onClick={e => this.setOpenAlert(e)}>
                                    <Link className="nav-link" to={adminLink}>Admin Page</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </MenuStyle>

                {this.renderMessage()}
            </div>
            /* End menu */
        )
    }
}
