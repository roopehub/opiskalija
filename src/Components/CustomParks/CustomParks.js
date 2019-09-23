import React, { Component } from 'react';
import axios from 'axios';
import Polygon from 'leaflet';
import CustomPolygon from '../CustomPolygon/CustomPolygon';

class CustomParks extends Component {

    constructor() {
        super();
        this.state = {
            parkData: []
        }
    }

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
        return (
            this.state.parkData.map((item, i) => {
                if (item.geometry !== null && item.geometry.coordinates[0] && i < 1) {
                    if (item.geometry.coordinates.length === 1) {
                        let posis = [...item.geometry.coordinates[0]];
                        // let position = posis.map((item) => { 
                        //     return [item[1], item[0]];
                        //    });

                        posis = JSON.stringify(posis);

                        console.log(posis);
                        // <CustomPolygon positions={item.geometry.coordinates[0]} customKey={item.id}/>
                        return <Polygon positions={posis} key={i} />
                    }
                    return null;

                } else {
                    return null;
                }
            })
        );
    }
}

export default CustomParks;