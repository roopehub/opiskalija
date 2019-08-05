import React, { Component } from 'react';
import { Marker } from 'react-leaflet';
import BeverageCustomPopup from '../BeverageCustomPopUp/BeverageCustomPopup';
import CitybikeCustomPopup from '../CitybikeCustomPopUp/CitybikeCustomPopUp';
import classes from './CustomMarker.css';
import {BIG, BIY, BIO, BIR, BIKE} from '../CustomIcon/CustomIcon';
import Aux from '../../Hoc/Auxiliary/Auxiliary';

class CustomMarker extends Component {
    render() {
        let newIcon;
        if (this.props.type === 'beverage') {
            if (this.props.Icon === 'BIG') newIcon = BIG;
            if (this.props.Icon === 'BIY') newIcon = BIY;
            if (this.props.Icon === 'BIO') newIcon = BIO;
            if (this.props.Icon === 'BIR') newIcon = BIR;
        } 
        if (this.props.type === 'citybike') {
            newIcon = BIKE;
        }
        return (
            <Aux>
            { this.props.type === 'beverage' ? (
                <Marker position={this.props.location} icon={newIcon} className={classes.CustomMarker}>
                    <BeverageCustomPopup content={this.props.popUp}/>
                </Marker>
                ) : (  
                <Marker position={this.props.location} icon={newIcon} className={classes.CustomMarker}>
                    <CitybikeCustomPopup content={this.props.popUp} /> 
                </Marker>
            )}
            </Aux>
        )
    }
}

export default CustomMarker;
