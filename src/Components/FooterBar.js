import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./FooterBar.css";
import fb_me from "../img/facebook-messenger.png";
import icon_fb from "../img/icon-fb.svg";
import icon_insta from "../img/icon-insta.svg";

class FooterBar extends Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col md={12}>
              <div style={{ height: 100, paddingTop: 50, paddingBottom: 60 }}>
                <a href="https://www.facebook.com/coldbloodapp/" target="_blank">
                  <img src={icon_fb} className="social_icon" />
                </a>
                &emsp;
                <a href="https://www.instagram.com/app.coldblood/" target="_blank">
                  <img src={icon_insta} className="social_icon" />
                </a>
                &emsp;
                <a href="https://m.me/635728603438569" target="_blank">
                  <Button className="btn_fb_me">
                    <img src={fb_me} />
                    &nbsp; Message Us
                  </Button>
                </a>
                <br />
                <br />
                © All images are copyrighted by their respective authors.
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FooterBar;
