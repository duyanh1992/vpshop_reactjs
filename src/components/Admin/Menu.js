import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { menus } from '../../constants/menus';

const MenuItem = ({path, exact, label}) => {
  return (
    <Route
      path={path}
      exact={exact}
      children={({match}) => {
        const active = match ? 'menu-active' : '';
        const textActive = match ? 'text-white' : '';

        return (
          <li className={`nav-item ${active}`}>
            <Link to={path} className={`${textActive} nav-link`}>{label}</Link>
          </li>
        );
      }}>

    </Route>
  );
};

class Menu extends Component {
  renderMenu() {
    let result = null;

    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuItem key={index} path={menu.path} exact={menu.exact} label={menu.label} />
        );
      });
    }

    return result;
  }

  render() {
    return (
      <div className="menu">
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.renderMenu()}
            </ul>
            
            <div className="dropdown">
              <a className="nav-link dropdown-toggle" href="/a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Welcome, User !
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="a">Logout</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;