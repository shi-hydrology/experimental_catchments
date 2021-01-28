import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Header from './Header.js'
import SwampCards from './SwampCards.js'



export default class StartPage extends Component{
	render(){
		return(				
			
			<div>
				<Header/>
				<Paper style={{height: 'auto', width: '80vw', margin: 'auto', opacity: 0.9, padding: '50px'}}>
					<Typography variant="h4">
					<br/>						
					Проект - Экспериментальные водосборы 
					</Typography>
					<Typography variant="body1" component="p">
					<br/>						
					Длинный длинный длинный длинный длинный длинный длинный длинный длинный длинный длинный длинный длинный длинныйдлинныйдлинныйдлинныйдлинныйдлинныйдлинныйдлинныйтекст о том зачем это все вообще нужно 
					</Typography>
					<br/>
					<SwampCards/>
				</Paper>				
			</div>
			)
	}
}