import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Popup} from 'react-leaflet';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import TimeSeriesDialog from './TimeSeriesDialog.js'
import TimeSeriesPaper from './TimeSeriesPaper.js'

import station_layers from './data/station_layers.js'

class LamminSuoMap extends Component{
	constructor(props){
		super(props)
		
		this.state = {
            dialogs_list: null
	    }
    }
    
    returnDialogs=()=>{
        var els_list=this.state.dialogs_list
        console.log(els_list)
        return els_list
    }

    addDialogToStateList=(main_info)=>{
        var title = main_info.name
        var description = main_info.description
        var dialog_element = (<TimeSeriesDialog title={title} open={true} desctiption={description}/>)
        
        this.setState(() => {return {dialogs_list: dialog_element}})
        console.log(this.state)
    }

    returnMarkers=()=>{
        var markers = []
        var active_layers = this.props.active_layers		
        var layers = this.props.layers
        for(var n in Object.keys(active_layers)){
            var type = Object.keys(active_layers)[n]
            if (active_layers[type]==true){
                for (var t in station_layers){
                    if (station_layers[t].type_name==type){
                        var custom_icon=station_layers[t].type_icon
                    }
                }
                for (var m in layers[type]){
                    var main_info=layers[type][m]
                    var coordinates=[main_info.geometry.coordinates[0][1], main_info.geometry.coordinates[0][0]]
                    if (main_info!=null && main_info!=undefined){
                        var one_marker= (<Marker icon={custom_icon} position={coordinates}>
                                            <Tooltip direction="right">
                                                <span>{main_info.name}</span>
                                            </Tooltip>
                                            <Popup >
                                                <span><b>{main_info.name}</b></span>
                                                <br/>                                                
                                                <Divider />
                                                <br/>
                                                {main_info.description}                                                
                                                <div style={{width: '100%', justifyContent:'center', textAlign:'center'}}>
                                                <br/>
                                                    <Button size="small" variant="contained" color="inherit" onClick={()=>{this.addDialogToStateList(main_info)}}>
                                                    Показать временные ряды            
                                                    </Button>
                                                </div>
                                            </Popup>
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
                {this.returnDialogs()}
                <TimeSeriesPaper/>
            </div>
        )
    }
    }
export default LamminSuoMap;