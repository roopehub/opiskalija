import React, { Component } from 'react';
import classes from './CustomPopup.css'
import { Popup } from 'react-leaflet';
import { createReittiopasUrl } from '../../Controls/LocateControl/LocateControl';
import Button from '@material-ui/core/Button';


class customPopup extends Component {
    
    render() {
        let price = String(this.props.content.beer_price).split('');
        return (
            <Popup className={classes.Popup}>
                <div>
                    <h2>{this.props.content.name}</h2>
                    <hr/>
                    <p>Beer: {this.props.content.beer_name}</p>
                    <p>Price: <strong>{price[0]}.{price[1]}</strong> €</p>
                    <Button variant="outlined" onClick={() => createReittiopasUrl(this.props)}>Road to Beer! <i className="material-icons">tram</i> </Button>
                </div>
            </Popup>
        )
    }
}

export default customPopup;