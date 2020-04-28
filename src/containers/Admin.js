import React, { Component } from 'react';
import Menu from '../components/Admin/Menu';
import Banner from '../components/Admin/Banner';
import Title from '../components/Admin/Title';
import Footer from '../components/Admin/Footer';
import routes from '../routes';
import { showPageContent } from '../common/utils';
import { Redirect } from 'react-router-dom';

class Admin extends Component {
  render() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if(!currentUser || currentUser[0].level !== 1) 
      return <Redirect to='/' />

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