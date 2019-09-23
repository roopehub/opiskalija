import React from 'react';
import Polygon from 'leaflet';

const customPolygon = (props) => (
    <Polygon positions={props.positions} key={props.customKey} />
)

export default customPolygon;