import React from 'react';
import classes from './CitybikeCustomPopUp.css'
import { Popup } from 'react-leaflet';

const citybikeCustomPopup = (props) => {
    return (
        <Popup className={classes.Popup}>
            <div>
                <h2>{props.content.properties.name}</h2>
                <p><i className="material-icons">directions_bike</i>: {props.content.properties.total_slot}</p>
                <p>Operative: <span className={classes.ActivePoint} style={props.content.properties.operative === 'Yes' ? {backgroundColor: '#c6f1d6'} : {backgroundColor: ' #ff8080'}}></span></p>

                {/* <i>coord {props.content.geometry.coordinates[1]}</i>
                <i>coord {props.content.geometry.coordinates[0]}</i> */}
            </div>
        </Popup>
    )
}

export default citybikeCustomPopup;