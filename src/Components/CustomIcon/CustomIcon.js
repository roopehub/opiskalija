import L from 'leaflet';

const beerIcon = new L.Icon({
    iconUrl: require('../../Assets/Images/beer_icon2.png'),
    iconRetinaUrl: require('../../Assets/Images/beer_icon2.png'),
    iconAnchor: [0, 0],
    popupAnchor: [17, 10],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 45),
    className: 'CustomMarker'
});

export default beerIcon;