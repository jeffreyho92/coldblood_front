import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class NavBarBottom extends Component {
  render() {
    return (
      <div id="navbar_bottom">
          <div className="col-xs-12 navbar-inverse navbar-fixed-bottom">
            <div className="row" id="bottomNav">
              <div className="col-xs-4 text-center"><a href="#"><i className="glyphicon glyphicon-circle-arrow-left" /><br />Link</a></div>
              <div className="col-xs-4 text-center"><a href="#"><i className="glyphicon glyphicon-circle-arrow-down" /><br />Link</a></div>
              <div className="col-xs-4 text-center"><a href="#"><i className="glyphicon glyphicon-circle-arrow-right" /><br />Link</a></div>
            </div>
          </div>
        </div>
    )
  }
}

export default NavBarBottom
