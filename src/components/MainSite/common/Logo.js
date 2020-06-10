import React, { Component } from 'react';
import { logoAnimation, bannerAnimation } from '../../../common/utils';
import styled from 'styled-components';

const LogoStyle = styled.div`
    animation: 1.5s ${logoAnimation} forwards;
`;

const BannerStyle = styled.div`
    animation: 1.5s ${bannerAnimation} ease-out;
`;

export default class Logo extends Component {
    render() {
        return (
            /* Logo and banner */
            <div className="logo mb-4">
                <div className="row">
                    <LogoStyle className="col-md-5">
                        <img alt="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} />
                    </LogoStyle>
                    <BannerStyle className="col-md-7 d-flex align-items-center">
                        <img alt="banner" src={process.env.PUBLIC_URL + '/images/banner.png'} />
                    </BannerStyle>
                </div>
            </div>
            /* End Logo and banner */
        )
    }
}
