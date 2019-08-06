import React from 'react';
import { TileLayer, LayersControl, LayerGroup } from 'react-leaflet';
import CityBikes from '../../Containers/CityBikesMarkers/CityBikesMarkers';
import BeveragesMarkers from '../../Containers/BeveragesMarkers/BeveragesMarkers';
import CustomMarkerCluster from '../../Hoc/CustomMarkerCluster/CustomMarkerCluster';

const customTileLayer = (props) => (
  
    <LayersControl position="topright">
      <LayersControl.Overlay name="Beers" checked>
          <LayerGroup>
            <CustomMarkerCluster maxRadius={20}>
                <BeveragesMarkers />
            </CustomMarkerCluster>
          </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="City bikes">
          <LayerGroup>
            <CustomMarkerCluster maxRadius={80}>
              <CityBikes/>
            </CustomMarkerCluster>
          </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.BaseLayer name="Old school">
          <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
          />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Go Green" checked>
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