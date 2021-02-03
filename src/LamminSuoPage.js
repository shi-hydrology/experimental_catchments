import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';
import * as L from 'leaflet';


import Header from './Header.js'
import LeftPanel from './LeftPanel.js'
import stations from './data/stations.js'

export default class LamminSuoPage extends Component{

	

	render(){
		document.title='Болото Ламмин-Суо'
		console.log(stations)
		return(				
			<div>
				<Header/>
				<MapContainer style={{height: '93vh', width: '100%', margin:'0',  display: 'block', zIndex: 0, position: 'absolute'}}  center={[60.24077, 29.81952]} zoom={14}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
				<LeftPanel/>
			</div>
			)
	}
}