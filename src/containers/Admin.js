import React, { Component } from 'react';
import Menu from '../components/Admin/Menu';
import Banner from '../components/Admin/Banner';
import Title from '../components/Admin/Title';
import Footer from '../components/Admin/Footer';
import { Route } from 'react-router-dom';
import routes from '../routes';

class Admin extends Component {
  showPageContent(routes) {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        )
      });
    }
    return result;
  }

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

            {this.showPageContent(routes)}

          </div>
        </div>

        <Footer />  
      </div>
    );
  }
}

export default Admin;