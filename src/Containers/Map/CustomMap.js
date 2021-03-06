import React, { Component } from 'react';
import L from 'leaflet';
import { Map } from 'react-leaflet';
import classes from './CustomMap.css';
import BeveragesMarkers from '../BeveragesMarkers/BeveragesMarkers';

import Header from '../../Components/Header/Header';
import CustomTileLayer from '../../Components/CustomTileLayer/CustomTileLayer';
import LocationControl from '../../Controls/LocationControl/LocationControl';
import CustomLegend from '../../Components/CustomLegend/CustomLegend';
import ScaleControl from '../../Controls/ScaleControl/ScaleControl';
import Aux from '../../Hoc/Auxiliary/Auxiliary';

class CustomMap extends Component {
    state = {
        startPos: [60.175, 24.94],
        startZoom: 13,
    }
    render() {
        let grayscale,
            streets
        const layers = [
            grayscale = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {id: 'MapID', attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}),
            streets = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {id: 'MapID', attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'})
        ]
        return (
            <Aux>
                <Header />
                <Map 
                    center={this.state.startPos}
                    zoom={this.state.startZoom}
                    className={classes.Mapp}
                    layers={layers}>
                    <CustomTileLayer/>
                    <LocationControl />
                    <CustomLegend />
                    <ScaleControl/>
                </Map>
            </Aux>
        );
    }
}

export default CustomMap;