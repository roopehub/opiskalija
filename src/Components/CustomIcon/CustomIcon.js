import L from 'leaflet';
import classes from './CustomIcon.css';

    export const BIG = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_green.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_green.png'),
        iconAnchor: [0, 0],
        popupAnchor: [17, 10],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(40, 50),
        className: classes.CustomMarker
    });
    
    export const BIY = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_yellow.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_yellow.png'),
        iconAnchor: [0, 0],
        popupAnchor: [17, 10],
        iconSize: new L.Point(35, 45),
        className: classes.CustomMarker
    });
    
    export const BIO = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_orange.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_orange.png'),
        iconAnchor: [0, 0],
        popupAnchor: [17, 10],
        iconSize: new L.Point(35, 45),
        className: classes.CustomMarker
    });
    
    export const BIR = new L.Icon({
        iconUrl: require('../../Assets/Images/beer_icon_red.png'),
        iconRetinaUrl: require('../../Assets/Images/beer_icon_red.png'),
        iconAnchor: [0, 0],
        popupAnchor: [17, 10],
        iconSize: new L.Point(35, 45),
        className: classes.CustomMarker
    });




// red #ff8080
// orange #ffba92
// yellow #eceba7
// Green #c6f1d6