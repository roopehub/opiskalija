import React, { Component } from 'react';
import { TileLayer, LayersControl, LayerGroup } from 'react-leaflet';
import CityBikes from '../../Containers/CityBikesMarkers/CityBikesMarkers';
import BeveragesMarkers from '../../Containers/BeveragesMarkers/BeveragesMarkers';
import CustomMarkerCluster from '../../Hoc/CustomMarkerCluster/CustomMarkerCluster';
import axios from 'axios';
import CustomParks from '../CustomParks/CustomParks';

class CustomTileLayer extends Component {

  constructor() {
    super();
    this.state = {
        weatherData: null,
        parkData: null
    }
}

componentDidMount() {
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=Helsinki&APPID=9aa546b3b7c7f8f692117d6a020e9966&units=metric')
  .then((response) => {
      if (response) {
          this.setState({weatherData: response.data.main.temp});
      }
  })
  .catch((error) => {
      console.log(error);
  })
}

  render() {

    // let temp = null;
    // temp = this.state.weatherData;
    // console.log("wd: " + temp);

    return (
      <LayersControl position="topright">
      <LayersControl.Overlay name="Beers" checked>
          <LayerGroup>
            <CustomMarkerCluster maxRadius={5} type='Beer'>
                <BeveragesMarkers />
            </CustomMarkerCluster>
          </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="City bikes">
          <LayerGroup>
            <CustomMarkerCluster maxRadius={50} type='Bike'>
              <CityBikes/>
            </CustomMarkerCluster>
          </LayerGroup>
      </LayersControl.Overlay>

      {/* { temp !== null ?
        <LayersControl.Overlay name={temp + " C, warm enough?"}>
           <LayerGroup>
             <CustomParks />
           </LayerGroup>
       </LayersControl.Overlay>
       : null
      } */}
  
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
    )
  }
    
};

export default CustomTileLayer;