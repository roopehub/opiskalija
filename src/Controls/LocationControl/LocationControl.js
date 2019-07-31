import { Component } from "react";
import { withLeaflet } from "react-leaflet";
import Locate from "leaflet.locatecontrol";

class LocateControl extends Component {

    //http://www.reittiopas.fi/fi/?from=keskuskatu+2&to=kuusitie+5,helsinki&hour=16&minute=15

    state = {
        currentLocation: null
    }

  // createReittiopasUrl = (props) => {
  //     console.log("2");
  //     console.log(this.state.currentLocation);
  //     const today = new Date();
  //     const hour = today.getHours();
  //     const minutes = today.getMinutes();
  //     const lat = 60.224766;
  //     const lng = 25.012219;
  //     let dest = props.content.address ? props.content.address.replace(/\s/g, "") : '';
      
  //     axios.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ lat +'&lon='+ lng +'')
  //     .then((data)=> {
  //         console.log(data);
  //         return "";
  //     });
  
  //     let url = "http://www.reittiopas.fi/fi/?"+ from +"&to="+ dest +",helsinki&hour="+ hour +"&minute="+ minutes +"";
  //     console.log(url);
      
  //     window.open(url, "_blank");
  // }

  componentDidMount() {
    const options = {
        ...this.props,
        startDirectly: false,
        flyTo: true,
        keepCurrentZoomLevel: true,
        strings: {
            title: 'Show me where I am, yo!'
        },
      }

    const { map } = this.props.leaflet;

    const lc = new Locate(options);
    lc.addTo(map);
    console.log(lc);

    if (lc._map._lastCenter) {
        this.setState({currentLocation: [lc._map._lastCenter.lat, lc._map._lastCenter.lng]})
    }

    if (options.startDirectly) {
      lc.start();
    }
  }

  render() {  
    return null;
  }
}

export default withLeaflet(LocateControl);