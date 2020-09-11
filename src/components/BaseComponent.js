import {Component} from 'react';
import React from 'react';
//import DataBaseHandler from '../utils/database'
//import Router       from 'next/router';

class BaseComponent extends Component{
	static alertField = new React.createRef();
	static isLogged = false;
	static dataLogged = {};
	constructor(props){
		super(props);

		//this.db = new DataBaseHandler();
		this.redirectTo = this.redirectTo.bind(this);

		this.logout = this.logout.bind(this);
		this.login = this.login.bind(this);
		this.isLogged = this.isLogged.bind(this);
	}

	componentDidMount() {
		if(!BaseComponent.isLogged){
			this.redirectTo("/login", "/login");
		}
	}

	isLogged() {
		return BaseComponent.isLogged;
	}

	login(data) {
		BaseComponent.isLogged = true;
		BaseComponent.dataLogged = data;
	}

	logout(){
		BaseComponent.isLogged = false;
		BaseComponent.dataLogged = {};
		this.redirectTo("/login", "/login");
	}

	redirectTo(to, alias){
		//Router.push(to, alias);
	}
}

export default BaseComponent;
