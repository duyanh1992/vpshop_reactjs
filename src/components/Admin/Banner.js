import React, { Component } from 'react';
import * as Config from '../../config.js';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img src={`${Config.API_URL}images/logo.png`} alt="banner"/>
      </div>
    );
  }
}

export default Banner;