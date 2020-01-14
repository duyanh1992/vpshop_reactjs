import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Logo from './Logo';
import Menu from './Menu';


export default class Header extends Component {
    render() {
        return (
            <div className="header mb-4">
                <SearchBar />

                <div className="container">
                    <Logo />
                    <Menu />
                </div>
            </div>

        )
    }
}
