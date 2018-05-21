import React, { Component } from 'react';
import NavBar from '../../Components/NavBar';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import img4 from '../../../public/img/img4.jpeg';
import './ImageScene.css';

class ImageScene extends Component {
  render() {
    return (
      <div>
        <NavBar active=""/>
        <Grid>
          <Row className="show-grid" style={{margin: 0, marginTop: -10}} >

            {/*
            <Col xs={7} md={5}>
              <Row>
                <Col xs={8} md={8} className="large_box" xsOffset={1}>
                  <div>
                    <img src={img4} className="img" />
                  </div>
                </Col>
                <Col xs={4} md={4}>
                  <p>
                    a
                  </p>
                </Col>
              </Row>
            </Col>
            */}
            <Col xs={3} md={3} style={{borderRadius: 5, border: "1px solid #e6e6e6", padding: 30, paddingBottom: 50, backgroundColor: "white"}}>
              <Row style={{display: "flex", alignItems: "center", height: 50}}>
                {/*<Col xs={4} md={4}></Col>
                <Col xs={4} md={4} >
                    <Image src={img4} style={{width: 80, height: 80}} circle/>
                </Col>
                <Col xs={4} md={4}></Col>*/}
                <Col xs={12} md={12} style={{top: -30}} >
                  <Image src={img4} style={{width: 80, height: 80}} className="center-block" circle/>
                </Col>
              </Row>
              <Row style={{display: "flex", alignItems: "center"}}>
                <Col xs={4} md={8} >
                  Alkarus <br/> @alkarus
                </Col>
                <Col xs={4} md={4} style={{padding: 0}} > {/*  mdPush={4}  */}
                  <Button bsStyle="success" bsSize="sm" >follow</Button>
                </Col>
              </Row>
            </Col>
            <Col xs={3} md={6} style={{borderRadius: 5, border: "1px solid #e6e6e6", marginLeft: 30, backgroundColor: "white"}}>
              <Row>
                <Col style={{margin: "20px 15px 20px 15px"}}>
                  <img src={img4} className="img center-block" />
                </Col>
              </Row><Row>
                <Col style={{margin: "0px 20px 20px 20px"}}>
                  <p>
                    #ABC #DEF #GHI #JKL
                  </p>
                  <hr/>
                  <p>
                    2,130 likes  -  2w
                  </p>
                  <p>
                    <b>Alkarus</b> comment
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ImageScene;
