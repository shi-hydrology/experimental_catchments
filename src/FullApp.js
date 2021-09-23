
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'

import StartPage from './StartPage.js'
import LamminSuoPage from './LamminSuoPage.js'
import BelorussianSwPage from './BelorussianSwPage.js'
import ArchivePage from './ArchivePage.js'
import AboutPage from './AboutPage.js'
import DocumentationPage from './DocumentationPage.js'
import TestFuckingPage from './Test.js'

export default class FullApp extends Component{

	render(){
		return(
			<div className='App'>
        <Router>
          <div>
            <Route exact path="/"  component={StartPage}/>
            <Route path="/lammin_suo/" component={LamminSuoPage}/>
            <Route path="/belorussian/" component={BelorussianSwPage}/>
            <Route path="/archive/" component={ArchivePage}/>
            <Route path="/about/" component={AboutPage}/>
            <Route path="/documentation/" component={DocumentationPage}/>
            <Route path="/test/" component={TestFuckingPage}/>
          </div>
        </Router>
			</div>
			)
	}
}
