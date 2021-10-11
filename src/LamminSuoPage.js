import React, {Component} from 'react';

import station_layers from './data/station_layers.js'

import Header from './Header.js'
import LeftPanel from './LeftPanel.js'
import LamminSuoMap from './LamminSuoMap.js'
import fetchData from "./FetchData.js"

export default class LamminSuoPage extends Component{
	constructor(props){
		super(props)
		this.state = {
			layers: null,
			layers_parse: false,
			active_layers: {},
			stations:{},
		}
	}

	setCheckedLayers=(type_name, value)=>{
		var new_active_layers=this.state.active_layers
		new_active_layers[type_name]=value
		this.setState(() => {return {active_layers: new_active_layers}})
	}

	parseStationsByType=(stations, station_layers)=>{
		// console.log("Statie : ", stations)
		var layersDict={}
		for (var layer in station_layers){
		  layersDict[station_layers[layer].type_name]=[]
		  for (var feature_id in stations.features){
			for (var key in stations.features[feature_id].properties.obs_type){

			if (station_layers[layer].type_name==key){

			  stations.features[feature_id].properties['geometry']=stations.features[feature_id].geometry
			  layersDict[station_layers[layer].type_name].push(stations.features[feature_id].properties)
				}
			}
		  }
		}
		this.setState(() => {return {layers: layersDict, layers_parse: true}})
	  }

	render(){
		document.title='Болото Ламмин-Суо'
		if (this.state.layers_parse==false){
			fetchData("http://localhost:8080/api/sites?station_id=1").then(data => (this.parseStationsByType(data, station_layers)))

		}

		return(
			<div className='body-scroll-hidden'>
				<Header/>
				<LamminSuoMap layers={this.state.layers} active_layers={this.state.active_layers}/>
				<LeftPanel layers={this.state.layers} setCheckedLayers={(type_name, value)=>this.setCheckedLayers(type_name, value)}/>
			</div>
			)
	}
}
