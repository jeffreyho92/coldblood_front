import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import { Grid, Jumbotron, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Layout from "../../Layout";
import Infinite from "../../Components/Infinite";

class App extends Component {
  componentWillMount() {
    /*
    let hash = this.props.location.hash.replace("#", "");
    console.log(hash);
    if (hash) {
      let node = ReactDOM.findDOMNode(this.refs[hash]);
      console.log(node);
      if (node) {
        node.scrollIntoView();
      }
    }*/

    const isInStandaloneMode = window.matchMedia("(display-mode: standalone)").matches;
    if (isInStandaloneMode) {
      if (localStorage.getItem("last_route")) {
        var last_route = localStorage.getItem("last_route").split(",");

        //check if last_route more than 60mins
        var startTime = new Date(last_route[1]);
        var endTime = new Date();
        var difference = endTime.getTime() - startTime.getTime();
        var resultInMinutes = Math.round(difference / 60000);
        console.log("resultInMinutes" + resultInMinutes);
        if (resultInMinutes >= 60) {
          localStorage.removeItem("last_route");
        } else {
          this.props.history.push(last_route[0]);
        }
      }
    }
  }

  onClickCat(cat) {
    var title = "infinite_" + cat;
    localStorage.removeItem(title);
  }
  render() {
    return (
      <Layout nav="home">
        <Jumbotron>
          <Grid>
            <Row>
              <Col md={12} className="title1">
                <em>Discover high cost performance</em>
              </Col>
            </Row>

            <Row className="cat_container">
              <Col xs={12} md={3} className="cat_col">
                <div className="cat_box cat_hype" onClick={this.onClickCat("hype")}>
                  <Link to="/d/hype">
                    <span>Hype</span>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={3} className="cat_col">
                <div className="cat_box cat_sport" onClick={this.onClickCat("sport")}>
                  <Link to="/d/sport">
                    <span>Sport</span>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={3} className="cat_col">
                <div className="cat_box cat_techwear" onClick={this.onClickCat("techwear")}>
                  <Link to="/d/techwear">
                    <span>Techwear</span>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={3} className="cat_col">
                <div className="cat_box cat_local" onClick={this.onClickCat("local")}>
                  <Link to="/d/local">
                    <span>Local</span>
                  </Link>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={12} className="title2">
                <em>Hypebeast is a type of species who has no body temperatures.</em>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid>
          <Infinite />
        </Grid>
      </Layout>
    );
  }
}
export default App;
