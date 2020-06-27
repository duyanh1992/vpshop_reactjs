import React, { Component } from 'react';
import { fromLeftToRight } from '../../../common/utils';
import styled from 'styled-components';

const LogoStyle = styled.div`
    animation: 1.5s ${fromLeftToRight(-330)} forwards;
`;

const BannerStyle = styled.div`
    animation: 1.5s ${fromLeftToRight(550)} ease-out;
`;

export default class Logo extends Component {
    render() {
        return (
            /* Logo and banner */
            <div className="logo mb-4">
                <div className="row">
                    <LogoStyle className="col-md-5 col-12 mb-md-3 mb-4 text-center text-md-left">
                        <img alt="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} />
                    </LogoStyle>
                    <BannerStyle className="col-12 col-md-7 d-md-flex align-items-center text-center">
                        <img alt="banner" src={process.env.PUBLIC_URL + '/images/banner.png'} />
                    </BannerStyle>
                </div>
            </div>
            /* End Logo and banner */
        )
    }
}
