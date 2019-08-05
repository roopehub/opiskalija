import React, { Component } from 'react';
import axios from 'axios';
import CustomMarker from '../../Components/CustomMarker/CustomMarker';
import Aux from '../../Hoc/Auxiliary/Auxiliary';
import classes from './CityBikesMarkers.css';
import { withLeaflet } from "react-leaflet";

class CityBikes extends Component {

    constructor() {
        super();
        this.state = {
            cityBikes: []
        }
    }

    componentDidMount() {
        axios.get("https://opendata.arcgis.com/datasets/1b492e1a580e4563907a6c7214698720_0.geojson")
        .then((response) => {
            if (response) {
                const data = response.data.features;
                this.setState({cityBikes: data});
            }
        })
        .catch((error) => {
            console.log("error fetching city bikes: " + error);
        })
    }

    render() {
        return (
            <Aux>
                {
                    this.state.cityBikes.filter(item => {
                        let lat = item.geometry.coordinates[0];
                        let lng = item.geometry.coordinates[1];
                        if (lng => 24.840319000421573 && lng <= 25.015391648206048 && lat <= 60.217214807617324) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    .map(item => {
                        return <CustomMarker location={[item.geometry.coordinates[1], item.geometry.coordinates[0]]} key={item.properties.FID} popUp={{...item}} type='citybike' />
                    })
                }
            </Aux>
        )
    }
}

export default withLeaflet(CityBikes);