import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            /* Logo */
            <div className="logo mb-4">
                <div className="row">
                    <div className="col-md-5">
                        <img alt="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} />
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <img alt="banner" src={process.env.PUBLIC_URL + '/images/banner.png'} />
                    </div>
                </div>
            </div>
            /* End logo */
        )
    }
}
