import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./FooterBar.css";

class FooterBar extends Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col md={12}>
              <div style={{ height: 100, paddingTop: 100, paddingBottom: 50 }}>© All images are copyrighted by their respective authors.</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FooterBar;
