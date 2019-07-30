import React from 'react';
import { Popup } from 'react-leaflet';

const customPopup = (props) => {

    const createReittiopasUrl = (from, dest) => {
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes();

        let url = "http://www.reittiopas.fi/fi/?"+ from +"&to="+ dest +",helsinki&hour="+ hour +"&minute="+ minutes +"";
        console.log(url);
        return url;
    }

    let price = String(props.content.beer_price).split('');

    return (
        <Popup>
            <div>
                <h2>{props.content.name}</h2>
                <hr/>
                <p>Beer: {props.content.beer_name}</p>
                <p>Price: <strong>{price[0]}.{price[1]}</strong> €</p>
                <a href={() => this.createReittiopasUrl(null, props.content.address)}><button>Hae reitti:</button></a>
            </div>
        </Popup>
    )
}

export default customPopup;