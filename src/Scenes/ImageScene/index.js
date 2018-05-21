import React, { Component } from "react";
import NavBar from "../../Components/NavBar";
import FooterBar from "../../Components/FooterBar";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./ImageScene.css";
import axios from "axios";
import { config } from "../../config.js";

class ImageScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      user: "",
      user_pic: "",
      username: "",
      caption: "",
      comments: []
    };
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    var username = "";
    //var api_url = `https://lawa-api.herokuapp.com/api/images/${id}`
    var api_url = `${config.api_url}/api/images/${id}`;
    axios.get(api_url).then(res => {
      if (res.data[0].username !== null) {
        username = res.data[0].username;
        this.setState({
          img: res.data[0].images.standard_resolution.url,
          caption: res.data[0].caption,
          username: res.data[0].username,
          //comments: res.data[0].comments,
          comments: []
        });

        api_url = `${config.api_url}/api/user_info/${username}`;
        axios.get(api_url).then(res => {
          if (res.data.username !== null) {
            this.setState({
              user: res.data.full_name,
              user_pic: res.data.profile_pic_url
            });
          }
        });
      } else {
        this.setState({
          img: res.data[0].images.standard_resolution.url,
          caption: "",
          user: "",
          username: "",
          user_pic: "",
          comments: []
        });
      }
    });
  }
  render() {
    console.log(this.state.comments);
    const comments = this.state.comments.map(comment => (
      <li>
        <b className="name">{comment.from.full_name || comment.from.username}</b>
        <span>{comment.text}</span>
      </li>
    ));
    return (
      <div>
        <NavBar active="" />
        <Grid>
          <Row className="imageContent">
            <Row className="equal">
              <Col xs={6} md={8} className="leftBox">
                <img src={this.state.img} className="img" />
              </Col>
              <Col xs={6} md={4} className="rightBox">
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col md={12}>
                    <Image src={this.state.user_pic} style={{ width: 50, height: 50 }} circle />
                    <span className="username">{this.state.user}</span>
                  </Col>
                  {/*
                        <Col md={4}>
                            <Button bsStyle="success" bsSize="sm" className="pull-right">follow</Button>
                        </Col>
                        */}
                </Row>
                <hr />
                <Row>
                  <Col md={12} className="caption">
                    {this.state.caption}
                  </Col>
                </Row>
                <Row className="likesBox">
                  <Col md={10}>2,130 likes</Col>
                  <Col md={2} className="pull-right">
                    2w
                  </Col>
                </Row>
                <Row className="commentsBox">
                  <Col md={12}>
                    <ul className="list-unstyled">{comments}</ul>
                  </Col>
                </Row>
                <Row className="inputBox">
                  <Col md={12}>
                    <hr />
                    <input type="text" id="input_comment" placeholder="add a comment" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mobileImageContent">
              <Col xs={12} className="img_col">
                <img src={this.state.img} className="img" />
              </Col>
              <Col xs={12} className="user_col">
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col xs={8}>
                    <Image src={this.state.user_pic} style={{ width: 50, height: 50 }} circle />
                    <span className="username">{this.state.user}</span>
                  </Col>
                  <Col xs={4}>
                    <Button bsStyle="success" bsSize="sm" className="pull-right">
                      follow
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="likes_col">
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col xs={10}>2,130 likes</Col>
                  <Col xs={2}>2w</Col>
                </Row>
              </Col>
              <Col xs={12} className="comments_col">
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col xs={12}>
                    <ul className="list-unstyled">
                      <li>
                        <a className="name">1</a> &emsp;
                        <span>Abc</span>
                      </li>
                      <li>
                        <a className="name">2</a> &emsp;
                        <span>Def</span>
                      </li>
                      <li>
                        <a className="name">3</a> &emsp;
                        <span>Ghi</span>
                      </li>
                      <li>&emsp;</li>
                      <li>&emsp;</li>
                      <li>&emsp;</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Grid>
        <FooterBar />
      </div>
    );
  }
}

export default ImageScene;
