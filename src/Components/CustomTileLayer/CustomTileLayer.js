import React from 'react';
import { TileLayer, LayersControl } from 'react-leaflet';

const customTileLayer = (props) => (
  
    <LayersControl position="topright">
    <LayersControl.BaseLayer name="Old school" checked>
        <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
        />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="Go Green">
        <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaGNyb29wZSIsImEiOiJjam9rY2luMDYwMnh0M3BteDNmNmZwOXprIn0.xxguOLMfAlFJX2s_XPqiLA'
        id= 'mapbox.streets'
        />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="Are you not entertained">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </LayersControl.BaseLayer>
    </LayersControl>
);

export default customTileLayer;