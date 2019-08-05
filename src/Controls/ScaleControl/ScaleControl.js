import { withLeaflet } from 'react-leaflet'
import L from 'leaflet';

const scaleControl = (props) => {
    const { map } = props.leaflet;
    L.control.scale().addTo(map)
    return null;
}

export default withLeaflet(scaleControl);