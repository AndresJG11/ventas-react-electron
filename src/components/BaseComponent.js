import {Component} from 'react';
import React from 'react';
//import DataBaseHandler from '../utils/database'
//import Router       from 'next/router';

import Promise from "bluebird";

const AppDAO = require('../db/dao').default
const Crud = require('../db/crud').default

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

		this.setDatabase();
        this.loadData();
	}

	setDatabase() {
        this.dao = new AppDAO('./database.sqlite3');
        this.db = new Crud(this.dao);
        /*this.db.createTable()
            .then(() => {
                console.log('db is created...')
            })
            .catch((err) => {
                console.log('Error: ')
                console.log(JSON.stringify(err))
            });*/
	}

	loadData() {
		var getAllData = this.db.getAll();
		 
        Promise.all(getAllData).then((data) => {
            console.log("data:", data);
            this.loadItem(data);
        }).catch( (err) => console.log(err) )
	}
	
	loadItem(data) {
        Object.keys(data).forEach((item) => {
            var newItem = {
                text: data[item].user,
                key: data[item].password
            };
 
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        });
	}
	
	addItem(e) {
        if (true) {
            var newItem = {
				user: 'andres',
				password: 'jimenez',
                key: Date.now()
            };
 
            this.db.insert(newItem.user, newItem.password, newItem.key);
            //this._inputElement.value = "";
        }
  
        //e.preventDefault();
    }

	componentDidMount() {
		if(!BaseComponent.isLogged){
			//this.redirectTo("/login", "/login");
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
