import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import * as L from 'leaflet';
import { MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';


import {frontend_settings} from './server_settings.js' 

import icon from './images/loc1.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconAnchor: [15, 30],
    tooltipAnchor: [15, -15]
});

L.Marker.prototype.options.icon = DefaultIcon;

var markers=[
            {'name': 'Болото Ламмин-Суо', 'position': [60.24077, 29.81952], 'link': 'http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/lammin_suo'},
            {'name': 'Белорусское болото', 'position': [53.4214, 28.1885], 'link': 'http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/belorussian'},
            ]

class MapMain extends Component{
	constructor(props){
		super(props)
		
		this.state = {
	    }
    }

    openLink=(link)=>{
        window.open(link, '_blank');
    }

    returnMarkers=()=>{
        var markersLayer=markers.map((markers) =>{
            return <Marker position={markers.position} eventHandlers={{click: (e) => {this.openLink(markers.link)}}}>
                        <Tooltip >{markers.name}</Tooltip>
                   </Marker>
            
        })
        return markersLayer
    }
    render(){
    return(
            <div>
                <Card style={{padding: '5px'}} fontWeight="fontWeightLight" fontStyle="italic">
                <CardHeader title="Объекты наблюдения" style={{height: '12px'}} titleTypographyProps={{variant:'subtitle1', color: 'inherit'}}/>
                <MapContainer style={{height: '50vh', width: '100%', margin:'0',  display: 'block', zIndex: 0}}  center={[57.366636, 30.274354]} zoom={5}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.returnMarkers()}
                </MapContainer>
                </Card>
            </div>
        )
    }
    }
export default MapMain;