import React, { Component } from 'react';
import axios from 'axios';
import CustomMarker from '../../Components/Marker/CustomMarker';

class CustomMarkers extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://five.epicollect.net/api/export/entries/opiskalija?form_ref=2ed54be05c3048cbaf1450a091b486ff_5d38e7224028c')
        .then((data) => {
            this.setState({
                data: data.data.data.entries
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            this.state.data.map((item, i) => {
                let popupContent = {
                    ...item
                }
                return <CustomMarker location={[item.location.latitude, item.location.longitude]} key={item.ec5_uuid} popUp={popupContent}/>
            })
        )
    }
}

export default CustomMarkers;

