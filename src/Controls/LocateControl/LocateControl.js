import axios from 'axios';
import L from 'leaflet';

export const createReittiopasUrl = (props) => {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();

    let dest = props.content.address ? props.content.address.replace(/\s/g, "") : null;

    if (dest && dest !== null) {
        navigator.geolocation.getCurrentPosition((location) => {
            let latLng = new L.LatLng(location.coords.latitude, location.coords.longitude);
            axios.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + latLng.lat + '&lon=' + latLng.lng + '')
                .then((resp) => {
                    let address = resp.data.display_name.split(",");
                    let from = ([].concat(address[0], address[1], address[2])).join("").replace(/\s/g, "");
                    let url = "http://www.reittiopas.fi/fi/?from=" + from + "&to=" + dest + ",helsinki&hour=" + hour + "&minute=" + minutes + "";
                    window.open(url, "_blank");
                });
        },
        error => {
            console.log(error);
            alert("Getting location failed");
        })
    }
}