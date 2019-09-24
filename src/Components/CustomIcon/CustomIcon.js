import L from 'leaflet';
import classes from './CustomIcon.css';

    export const BIG = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_green.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_green.png'),
        iconAnchor: [25, 46],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(35, 45),
        className: classes.CustomMarker
    });
    
    export const BIY = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_yellow.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_yellow.png'),
        iconAnchor: [25, 46],
        iconSize: new L.Point(35, 45),
        className: classes.CustomMarker
    });
    
    export const BIO = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_orange.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_orange.png'),
        iconAnchor: [25, 46],
        iconSize: new L.Point(35, 45),
        className: classes.CustomMarker
    });
    
    export const BIR = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_red.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_red.png'),
        iconAnchor: [25, 46],
        iconSize: new L.Point(35, 45),
        className: classes.CustomMarker
    });

    export const BIKE = new L.Icon({
        iconUrl: require('../../Assets/Images/bike.png'),
        iconRetinaUrl: require('../../Assets/Images/bike.png'),
        iconAnchor: [25, 46],
        iconSize: new L.Point(30, 30),
        className: classes.CustomMarker
    });

// popupAnchor: [17, 10],
// red #ff8080
// orange #ffba92
// yellow #eceba7
// Green #c6f1d6