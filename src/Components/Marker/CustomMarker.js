import React, { Component } from 'react';
import { Marker } from 'react-leaflet';
import CustomPopup from '../PopUp/CustomPopup';
import classes from './CustomMarker.css';
import {BIG, BIY, BIO, BIR} from '../CustomIcon/CustomIcon';

class CustomMarker extends Component {

    state = {
        icon: null
    }

    componentDidMount() {
        let newIcon;
        if (this.props.chosenIcon === 'BIG') newIcon = BIG;
        if (this.props.chosenIcon === 'BIY') newIcon = BIY;
        if (this.props.chosenIcon === 'BIO') newIcon = BIO;
        if (this.props.chosenIcon === 'BIR') newIcon = BIR;
        this.setState({icon: newIcon});
        console.log(this.props.chosenIcon);
    }

    render() {
        return (
            <Marker position={this.props.location} icon={this.state.icon} className={classes.CustomMarker}>
                <CustomPopup content={this.props.popUp} />
            </Marker>
        )
    }
};

export default CustomMarker;

