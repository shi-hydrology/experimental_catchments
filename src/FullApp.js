
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import StartPage from './StartPage.js'

export default class FullApp extends Component{

	render(){
		return(
			<div className='App'>
        <Router>
          <div>
            <Route exact path="/"  component={StartPage}/>
            <Route path="/test/" component={StartPage}/>
          </div>
        </Router>
			</div>
			)
	}
}