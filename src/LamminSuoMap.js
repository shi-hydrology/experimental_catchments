import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';
import * as L from 'leaflet';

class LamminSuoMap extends Component{
	constructor(props){
		super(props)
		
		this.state = {
	    }
    }

    returnMarkers=()=>{
        var markers = []
        var active_layers = this.props.active_layers		
        var layers = this.props.layers
        console.log(active_layers)
		console.log(layers)
        for(var n in Object.keys(active_layers)){
            var type = Object.keys(active_layers)[n]
            console.log(type)
            if (active_layers[type]==true){
                for (var m in layers[type]){
                    console.log(layers[type][m])
                }
            }
        }
    }

    render(){
    return(
            <div>
                <MapContainer style={{height: '93vh', width: '100%', margin:'0',  display: 'block', zIndex: 0, position: 'absolute'}}  center={[60.24077, 29.81952]} zoom={14}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                {this.returnMarkers()}
            </div>
        )
    }
    }
export default LamminSuoMap;