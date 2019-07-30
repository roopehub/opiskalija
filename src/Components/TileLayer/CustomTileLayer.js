import React from 'react';
import { TileLayer } from 'react-leaflet';

const customTileLayer = (props) => (
    <TileLayer 
        url={props.url}
        attribution={props.attribution}
        id={props.id}
    />
);

export default customTileLayer;