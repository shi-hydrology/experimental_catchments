import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';
import * as L from 'leaflet';

import Header from './Header.js'

export default class LamminSuoPage extends Component{
	render(){
		document.title='Болото Ламмин-Суо'
		return(				
			<div>
				<Header/>
				<MapContainer style={{height: '93vh', width: '100vw', margin:'0',  display: 'block', zIndex: 0}}  center={[60.24077, 29.81952]} zoom={14}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
			</div>
			)
	}
}