import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { menus } from '../../constants/menus';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItemIndex: 0
    };
  };

  handleMenuItemClick(index) {
    this.setState({ menuItemIndex: index });
  }

  renderMenu() {
    const { menuItemIndex } = this.state;
    let result = null;

    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <Route
            path={menu.path}
            exact={menu.exact}
            key={index}
            children={({ match }) => {
              const active = menuItemIndex === index ? 'menu-active' : '';
              const textActive = menuItemIndex === index ? 'text-white' : 'text-dark';

              return (
                <li className={`nav-item ${active}`}>
                  <Link
                    to={menu.path}
                    className={`nav-link ${textActive}`}
                    onClick={() => this.handleMenuItemClick(index)}
                  >{menu.label}
                  </Link>
                </li>
              );
            }}>

          </Route>
        );
      });
    }

    return result;
  }

  render() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userName = (currentUser[0].name) || 'user';

    return (
      <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.renderMenu()}
            </ul>

            <div className="dropdown">
              <a className="nav-link dropdown-toggle" href="/a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Welcome, <span style={{ color: 'red' }}>{userName}</span> !
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