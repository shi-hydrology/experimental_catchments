import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';
import Divider from '@material-ui/core/Divider';

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
            if (active_layers[type]==true){
                for (var m in layers[type]){
                    var main_info=layers[type][m]
                    console.log(main_info)
                    var coordinates=[main_info.geometry.coordinates[0][1], main_info.geometry.coordinates[0][0]]
                    if (main_info!=null && main_info!=undefined){
                        var one_marker= (<Marker position={coordinates}>
                                            <Tooltip placement="top" >
                                                {main_info.name}<br/><Divider />
                                            </Tooltip>
                                        </Marker>)
                        markers.push(one_marker)
                    }
                }
            }
        }
        return markers
    }

    render(){
    return(
            <div>
                <MapContainer style={{height: '93vh', width: '100%', margin:'0',  display: 'block', zIndex: 0, position: 'absolute'}}  center={[60.24077, 29.81952]} zoom={14}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                {this.returnMarkers()}
                </MapContainer>
                
            </div>
        )
    }
    }
export default LamminSuoMap;