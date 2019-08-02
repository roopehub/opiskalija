import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class CityBikes extends Component {

    state = {
        cityBikes: null
    }

    componentDidMount() {
        axios.get("https://opendata.arcgis.com/datasets/1b492e1a580e4563907a6c7214698720_0.geojson")
        .then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <Button variant="outlined"> Get city bike <i className="material-icons">directions_bike</i> </Button>
        )
    }
}

export default CityBikes;