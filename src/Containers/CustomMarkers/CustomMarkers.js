import React, { Component } from 'react';
import axios from 'axios';
import CustomMarker from '../../Components/Marker/CustomMarker';
import { green, yellow } from '@material-ui/core/colors';

class CustomMarkers extends Component {

    constructor() {
        super();
        this.state = {
            beerData: [],
            priceList: []
        }
    }

    handlePrices = () => {
        const prices = [...this.state.priceList];
        const mappedPrices = prices.map((price) => {
            if (price === 4) {
                return price = 40
            }
            else if (price === 5) {
                return price = 50
            }
            return price;
        })
        const sortedPrices = mappedPrices.sort((a, b) => a - b);
        return sortedPrices
    }

    componentDidMount() {
        axios.get('https://five.epicollect.net/api/export/entries/opiskalija?form_ref=2ed54be05c3048cbaf1450a091b486ff_5d38e7224028c')
        .then((response) => {
            if (response) {
                const data = response.data.data.entries;
                this.setState({beerData: data});
                let beerPrices = data.map((item) => {
                    return item.beer_price
                });
                this.setState({priceList: beerPrices});
            }
        
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        const prices = this.handlePrices();
        const divider = prices.length / 4;

        const chooseIcon = (price) => {
            console.log("WATAFAAAAAK");
            console.log(prices.indexOf(price));

            if (prices.indexOf(price) == 0 || prices.indexOf(price) <= divider) {
                return 'BIG';
            }
            else if (prices.indexOf(price) > divider || prices.indexOf(price) <= (divider * 2)) {
                return 'BIY';
            }
            else if (prices.indexOf(price) > (divider * 2) || prices.indexOf(price) <= (divider * 3)) {
                return 'BIO';
            }
            else if (prices.indexOf(price) > (divider * 3) || prices.indexOf(price) <= prices.length) {
                return 'BIR';
            }
        }

        return (
            this.state.beerData.map((item, i) => {
                let popupContent = {
                    ...item
                }
                return <CustomMarker location={[item.location.latitude, item.location.longitude]} key={item.ec5_uuid} popUp={popupContent} chosenIcon={() => chooseIcon(item.beer_price)}/>
            })
        )
    }
}

export default CustomMarkers;

