import React, {Component} from 'react';
import Header from './Header.js'
import DevelopingCard from './DevelopingCard.js'

export default class DocumentationPage extends Component{
	render(){
		return(				
			<div>
				<Header/>
				<DevelopingCard/>
			</div>
			)
	}
}