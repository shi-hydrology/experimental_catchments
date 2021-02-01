import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Header from './Header.js'
import SwampCards from './SwampCards.js'
import MapMain from './MapMain.js'



export default class StartPage extends Component{
	render(){
		return(				
			
			<div>
				<Header/>
				<Paper style={{height: 'auto', width: '80vw', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '50px'}}>
					<Typography variant="h4">					
					Проект - Экспериментальные водосборы 
					</Typography>
					<Typography variant="body1" component="p">
					<br/>						
					Текст о том зачем это все вообще нужно 
					<br/>
					Текст о том зачем это все вообще нужно 
					<br/>
					Текст о том зачем это все вообще нужно 
					<br/>
					Текст о том зачем это все вообще нужно 
					<br/>
					Текст о том зачем это все вообще нужно 
					<br/>
					Текст о том зачем это все вообще нужно 
					<br/>
					Текст о том зачем это все вообще нужно 
					<br/>
					<br/>
					<br/>
					<br/>
					Текст о том зачем это все вообще нужно 
					<br/>

					</Typography>
					<br/>
					<SwampCards/>
					<br/>
					<MapMain/>
				</Paper>				
			</div>
			)
	}
}