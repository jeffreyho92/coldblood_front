import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { config } from "../config.js";
import axios from "axios";

class NavBar extends Component {
  onClick() {
    const url = config.api_url + "/front/click_logs";
    axios
      .post(url, {
        id: 1
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onClickHome() {
    localStorage.removeItem("last_route");
    localStorage.removeItem("infinite_");
  }
  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" onClick={this.onClickHome}>
                <em className="brand_title">
                  <b>ColdBlood</b>
                </em>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {/*
            <Nav>
              <NavItem eventKey={2}  className=""><NavLink to="/about" isActive={false}>About</NavLink></NavItem>

              <Link to="/">
                <NavItem eventKey={1} className="active">Home</NavItem>
              </Link>
              <Link to="/Discover">
                <NavItem eventKey={2}>Discover</NavItem>
              </Link>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            */}
            <Nav>
              <li className={this.props.active === "home" ? "active" : ""} onClick={this.onClickHome}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={this.props.active === "discover" ? "active" : ""}>
                <NavLink to="/discover">Discover</NavLink>
              </li>
            </Nav>

            <Nav pullRight>
              <NavItem eventKey={1} href="https://sea.taobao.com/howtobuy" target="_blank" rel="noopener">
                <Button className="btnHowToBuy" onClick={this.onClick}>
                  How to buy
                </Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
