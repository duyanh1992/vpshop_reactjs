import React, { Component } from 'react'
import Header from './mainsite/common/Header'
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import color from '../theme/color';

const Main = styled.div`
    width: 70%;
    margin: 20px auto;
    background: ${color.white};
    border-top: 2px solid ${color.brown};
`;

export default class MainSite extends Component {
    render() {
        return (
            <Main className="main">
                <Header />
            </Main>
        )
    }
}
