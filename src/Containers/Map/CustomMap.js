import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import classes from './CustomMap.css';

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
        return (
            <Aux>
                <Header />
                <Map 
                    center={this.state.startPos}
                    zoom={this.state.startZoom}
                    className={classes.Mapp}>
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