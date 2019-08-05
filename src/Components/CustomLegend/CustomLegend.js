import { withLeaflet } from "react-leaflet";
import L from 'leaflet';
import classes from './CustomLegend.css';

const customLegend = (props) => {

        const legendOptions = {
            names: ['Cheapest', 'Quite cheap', 'More expensive', 'Most expensive'],
            icons: [classes.Green, classes.Yellow, classes.Orange, classes.Red]
        }

        const { map } = props.leaflet;
        const legend = L.control({position: 'bottomright'});

        legend.onAdd = function (map) {
            let div = L.DomUtil.create('div', 'CustomLegend');
            div.innerHTML += '<ul>';
            for (let i = 0; i < 4; i++) {
                div.innerHTML += '<div><li class='+ classes.Li +'><span class="'+ legendOptions.icons[i] +'"></span><p>'+ legendOptions.names[i]   +'</p></li></div>';
            }
            div.innerHTML += '</ul>';
            return div;
        };

        legend.addTo(map);

    return null
}

export default withLeaflet(customLegend);