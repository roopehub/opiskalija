import React, { Component } from 'react';
import axios from 'axios';
import {Polygon} from 'leaflet';
//import CustomPolygon from '../CustomPolygon/CustomPolygon';

class CustomParks extends Component {

    constructor() {
        super();
        this.state = {
            parkData: []
        }
    }

//wanha
//https://kartta.hel.fi/ws/geoserver/avoindata/wfs?request=GetFeature&service=WFS&version=1.1.0&typeName=avoindata:YLRE_Viheralue_alue&outputFormat=json
//uusi
//http://geoserver.hel.fi/geoserver/seutukartta/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=seutukartta%3AViheralueet&maxFeatures=1000000&outputFormat=application%2Fjson

    componentDidMount() {
        axios.get('https://kartta.hel.fi/ws/geoserver/avoindata/wfs?request=GetFeature&service=WFS&version=1.1.0&typeName=avoindata:YLRE_Viheralue_alue&outputFormat=json')
        .then((response) => {
            if (response) {
                console.log(response);
                this.setState({parkData: response.data.features});
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render () {
        this.state.parkData.map((item, i) => {
            if (item.geometry !== null && item.geometry.coordinates[0]) {
                if (item.geometry.coordinates.length === 1) {
                    let posi = [...item.geometry.coordinates[0]];
                    //let posis = JSON.stringify(posi);
                    console.log(posi); 
                    // <CustomPolygon positions={item.geometry.coordinates[0]} customKey={item.id}/>
                    return (
                        <Polygon positions={posi} key={i} />
                    ) 
                } else {
                    return null;
                }
            } else {
                return null;
            }
        })
        return null;
    }
}

export default CustomParks;