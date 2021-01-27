
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import StartPage from './StartPage.js'
import LamminSuoPage from './LamminSuoPage.js'
import BelorussianSwPage from './BelorussianSwPage.js'

export default class FullApp extends Component{

	render(){
		return(
			<div className='App'>
        <Router>
          <div>
            <Route exact path="/"  component={StartPage}/>
            <Route path="/lammin_suo/" component={LamminSuoPage}/>
            <Route path="/belorussian/" component={BelorussianSwPage}/>
          </div>
        </Router>
			</div>
			)
	}
}