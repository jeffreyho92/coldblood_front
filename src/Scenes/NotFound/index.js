import React, { Component } from 'react';
import NavBar from '../../Components/NavBar';
import { Grid } from 'react-bootstrap';

class NotFound extends Component {
  render() {
    return (
      <div>
        <NavBar active=""/>
        <Grid style={{paddingTop: 100}}>
          <h1>404 Not Found</h1>
        </Grid>
      </div>
    );
  }
}

export default NotFound;
