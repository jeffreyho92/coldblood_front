import React, { Component } from "react";
import "./HowToBuy.css";
import { Grid, Jumbotron, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Layout from "../../Layout";

class App extends Component {
  render() {
    return (
      <Layout nav="home">
        <Jumbotron>
          <p>Contact us, we will help you</p>
        </Jumbotron>
      </Layout>
    );
  }
}
export default App;
