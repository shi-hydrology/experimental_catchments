import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import * as L from 'leaflet';
import { MapContainer, TileLayer, Marker, Tooltip} from 'react-leaflet';


import {frontend_settings} from './server_settings.js'

import icon from './images/loc1.png';
import fetchData from "./FetchData.js"


let DefaultIcon = L.icon({
    iconUrl: icon,
    iconAnchor: [15, 30],
    tooltipAnchor: [15, -15]
});

L.Marker.prototype.options.icon = DefaultIcon;

class MapMain extends Component{
	constructor(props){
		super(props)

		this.state = {
            markers:[]
	    }
    }

    transformData = (url) =>{
        fetchData(url).then(data => { var features = data["features"];
            var marks = [];
            for (let id in features) {
                var temp_dict = {};
                var coords = [features[id]["properties"]["lat"], features[id]["properties"]["lon"]];
                if( (features[id]["properties"]["lon"] == null) || (features[id]["properties"]["lat"] == null)){
                    coords = [90.,135.0]
                }
                temp_dict["name"] = features[id]["properties"]["name"];
                temp_dict["position"] = coords;
                temp_dict["link"] = 'http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/lammin_suo';
                temp_dict["id"] = features[id]["properties"]["id"]
                temp_dict["type"] = features[id]["properties"]["type"]
                marks.push(temp_dict);
            };

            this.setState(() => {return {markers: marks }})
            return marks
        })

    }

    openLink=(link)=>{
        window.open(link, '_blank');
    }

    returnMarkers=(markers)=>{
        var markersLayer=markers.map((markers) =>{
            return <Marker position={markers.position} eventHandlers={{click: (e) => {this.openLink(markers.link)}}}>
                        <Tooltip >{markers.name}</Tooltip>
                   </Marker>

        })
        return markersLayer
    }
    render(){
        this.transformData("http://localhost:8080/api/stations")
    return(
            <div>
                <Card style={{padding: '5px'}} fontWeight="fontWeightLight" fontStyle="italic">
                <CardHeader title="Объекты наблюдения" style={{height: '12px'}} titleTypographyProps={{variant:'subtitle1', color: 'inherit'}}/>
                <MapContainer style={{height: '50vh', width: '100%', margin:'0',  display: 'block', zIndex: 0}}  center={[57.366636, 30.274354]} zoom={5}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    { this.returnMarkers(this.state.markers) }
                </MapContainer>
                </Card>
            </div>
        )
    }
    }
export default MapMain;
