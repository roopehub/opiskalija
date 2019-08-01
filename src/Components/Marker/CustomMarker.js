import React, { Component } from 'react';
import { Marker } from 'react-leaflet';
import CustomPopup from '../PopUp/CustomPopup';
import classes from './CustomMarker.css';
import {BIG, BIY, BIO, BIR} from '../CustomIcon/CustomIcon';

class CustomMarker extends Component {

    render() {

        let newIcon;
        if (this.props.Icon === 'BIG') newIcon = BIG;
        if (this.props.Icon === 'BIY') newIcon = BIY;
        if (this.props.Icon === 'BIO') newIcon = BIO;
        if (this.props.Icon === 'BIR') newIcon = BIR;

        return (
            <Marker position={this.props.location} icon={newIcon} className={classes.CustomMarker}>
                <CustomPopup content={this.props.popUp} />
            </Marker>
        )
    }
};

export default CustomMarker;

