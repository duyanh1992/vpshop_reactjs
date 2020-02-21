import React, { Component } from 'react';
import Menu from '../components/Admin/Menu';
import Banner from '../components/Admin/Banner';
import Title from '../components/Admin/Title';
import Footer from '../components/Admin/Footer';
import routes from '../routes';
import { showPageContent } from '../common/utils';

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper mt-3">
          <div className="header bg-white">
            <Menu />
            <Banner />
          </div>
        </div>

        <div className="content bg-white">
          <div className="container">
            <Title />

            {showPageContent(routes)}
          </div>
        </div>

        <Footer />  
      </div>
    );
  }
}

export default Admin;