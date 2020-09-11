import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import VerProductos from './pages/VerProductos';

import "./styles/main.scss";

const history = createBrowserHistory();
ReactDOM.render(
	<div>
	<Router>
		<Switch>
			<Route exact history={history}  path='/home' component={App} />
			<Route history={history}  path='/' component={Login} />
			<Route history={history}  path='/VerProductos' component={VerProductos} />
		</Switch>
	</Router>
	</div>,
  document.getElementById('root')
);



//<Route history={history} path="/404" component={NotFound} />
//<Redirect to="/404" />
