import React, { Component } from 'react'
import Header from './mainsite/common/Header'
import styled from 'styled-components';
import color from '../theme/color';
import MainContent from './mainsite/MainContent';

const Main = styled.div`
    width: 70%;
    margin: 20px auto;
    background: ${color.white};
    border-top: 2px solid ${color.brown};

    @media (max-width: 576px) {
        width: 100%;
        margin: 0;
    }
`;

export default class MainSite extends Component {
    render() {
        return (
            <Main className="main" style={{ "overflow": "hidden" }}>
                <Header />
                <MainContent />
            </Main>
        )
    }
}
