import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import classes from './CustomMap.css';
import CustomTileLayer from '../../Components/TileLayer/CustomTileLayer';
import CustomMarkers from '../CustomMarkers/CustomMarkers';
import LocationControl from '../../Controls/LocationControl/LocationControl';

class CustomMap extends Component {
    state = {
        startPos: [60.175, 24.94],
        startZoom: 13
    }
    render() {
        return (
            <Map 
                center={this.state.startPos}
                zoom={this.state.startZoom}
                className={classes.Mapp}>
                <CustomTileLayer
                    url={'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'}
                    attribution={'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'}/>
                <CustomMarkers />
                <LocationControl />
            </Map>
        );
    }
}

export default CustomMap;