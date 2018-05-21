/*import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Home from "./Scenes/Home";
import DiscoverScene from "./Scenes/DiscoverScene";
import DiscoverListScene from "./Scenes/DiscoverListScene";
import ImageScene from "./Scenes/ImageScene";
import ProfileScene from "./Scenes/ProfileScene";
import NotFound from "./Scenes/NotFound";
import HowToBuy from "./Scenes/HowToBuy";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/discover" component={DiscoverListScene} />
      <Route path="/d/:cat" component={DiscoverScene} />
      <Route path="/p/:id" component={ImageScene} />
      <Route path="/u/:username" component={ProfileScene} />

      <Route path="/how_to_buy" component={HowToBuy} />
      {/*<Route path="*" component={NotFound}/>}
    </div>
  </Router>
);

export default App;
*/

import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Scenes/Home/";
import DiscoverListScene from "./Scenes/DiscoverListScene/";
import DiscoverScene from "./Scenes/DiscoverScene/";
import HowToBuy from "./Scenes/HowToBuy/";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/discover" name="DiscoverListScene" component={DiscoverListScene} />
          <Route path="/d/:cat" name="DiscoverScene" component={DiscoverScene} />
          <Route path="/how_to_buy" name="HowToBuy" component={HowToBuy} />
          <Route path="/" name="Home" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
