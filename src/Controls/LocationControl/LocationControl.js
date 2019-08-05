import { Component } from "react";
import { withLeaflet } from "react-leaflet";
import Locate from "leaflet.locatecontrol";

class LocateControl extends Component {

    //http://www.reittiopas.fi/fi/?from=keskuskatu+2&to=kuusitie+5,helsinki&hour=16&minute=15

    state = {
        currentLocation: null
    }

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