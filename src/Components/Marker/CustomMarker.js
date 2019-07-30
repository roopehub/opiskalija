import React from 'react';
import { Marker } from 'react-leaflet';
import CustomPopup from '../PopUp/CustomPopup';
import classes from './CustomMarker.css';
import beerIcon from '../CustomIcon/CustomIcon';

const customMarker = (props) => (
    <Marker position={props.location} icon={beerIcon} className={classes.CustomMarker}>
        <CustomPopup content={props.popUp} />
    </Marker>
);

export default customMarker;

