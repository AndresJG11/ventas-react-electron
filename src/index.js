import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Login 		from './pages/Login';
import VerProductos from './pages/VerProductos';
import Vender from './pages/Vender';
import GenerarReporte from './pages/GenerarReporte';

import "./styles/main.scss";

const history = createBrowserHistory();
ReactDOM.render(
	<div>
	<Router>
		<ul style={{backgroundColor: "white"}}>
			<li> <Link to="/app"> App </Link></li>
			<li> <Link to="/verproductos"> Ver Productos  </Link></li>
			<li> <Link to="/"> Login  </Link></li>
			<li> <Link to="/generar-reporte"> Generar Reporte  </Link></li>
			<li> <Link to="/vender"> Vender  </Link></li>
		</ul>
		<Switch>
			<Route exact history={history}  path='/app' component={App} />
			<Route exact history={history}  path='/' component={Login} />
			<Route exact history={history}  path='/verproductos' component={VerProductos} />
			<Route exact history={history}  path='/generar-reporte' component={GenerarReporte} />
			<Route exact history={history}  path='/vender' component={Vender} />
		</Switch>
	</Router>
	</div>,
  document.getElementById('root')
);



//<Route history={history} path="/404" component={NotFound} />
//<Redirect to="/404" />
