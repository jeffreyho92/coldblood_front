/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { HashRouter, Route, Switch } from "react-router-dom";

//import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { createBrowserHistory } from "history";

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route path="/" name="Home" component={App} />
		</Switch>
	</HashRouter>,
	document.getElementById("root")
);
registerServiceWorker();
