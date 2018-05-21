import React, { Component } from 'react';
import './ProfileScene.css';
import { Grid, Jumbotron, Button, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

import NavBar from '../../Components/NavBar'
import Infinite from '../../Components/Infinite'
import FooterBar from '../../Components/FooterBar';

var rows = ['https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16584974_1458979630788510_3806227282167595008_n.jpg',
            'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c180.0.720.720/16229419_1847023965537374_6499156194618245120_n.jpg',
            'https://scontent-kut2-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/16229149_1843308122554535_7112231577479806976_n.jpg'];

class ProfileScene extends Component {
  
  componentWillMount(){
    var username = this.props.match.params.username;
    var url = 'https://www.instagram.com/'+username+'/?__a=1';
      axios.get(url)
          .then(res => {
            /*
              var result = [];
              res.data.map((data)=>{
                  var arr = [data.id, data.images.low_resolution.url]
                  result.push(arr)
              })
              */
            console.log(res)
          });
  }
  
  render() {
    var username = this.props.match.params.username;
    return (
      <div>
        <NavBar active="discover"/>
        <Grid>
          <div className="div_profile">
            <Row className="row_profile">
              <Col md={4} style={{display: 'flex', justifyContent: 'center'}}>
                <Image src={rows[0]} style={{width: 150, height: 150}} circle/>
              </Col>
              <Col md={8}>
                <em>{username.toUpperCase()}</em>
                <p>406 posts &emsp; 81.4k followers &emsp; 142 following</p>
                <p>Dany Dos Santos contact@alkarus.com droledemonsieur.com</p>
              </Col>
            </Row>
          </div>
          
          <Infinite user={username} />
        </Grid>
        <br/>
        <FooterBar />
      </div>
    );
  }
}

export default ProfileScene;
