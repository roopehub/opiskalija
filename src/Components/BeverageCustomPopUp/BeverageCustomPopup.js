import React, { Component } from 'react';
import classes from './BeverageCustomPopup.css'
import { Popup } from 'react-leaflet';
import { createReittiopasUrl } from '../../Controls/LocateControl/LocateControl';
import Button from '@material-ui/core/Button';
import CityBikes from '../../Containers/CityBikesMarkers/CityBikesMarkers';

class beverageCustomPopup extends Component {
    state = {
        showCitybikes: false,
        cityBikeText: 'Show'
    }

    onHandleDisplayCitybikes = () => {
        //console.log("B "+this.state.showCitybikes);
        this.setState(prevState => ({ showCitybikes: !prevState.showCitybikes}));
        //console.log("A "+ this.state.showCitybikes);

        let buttonText = this.state.cityBikeText === 'Show' ? 'Hide' : 'Show';
        this.setState({cityBikeText: buttonText});
    }

    render() {
        let beerPrice = null;
        let ciderPrice = null;
        let longdrinkPrice = null;

        if (this.props.content.beer_price) beerPrice = String(this.props.content.beer_price).split('');
        if (this.props.content.cider_price) ciderPrice = String(this.props.content.cider_price).split('');
        if (this.props.content.longdrink_price) ciderPrice = String(this.props.content.longdrink_price).split('');
        
        let pictureStyles = {
            backgroundImage: 'url(' + this.props.content.photo + ')',
            width: '25vh',
            height: '20vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxShadow: '1px 2px 3px',
            marginBottom: '20px',
            margin: '0 auto'
        }

        return (
            <Popup className={classes.Popup}>
                <div>
                    <h2>{this.props.content.name}</h2>
                    { 
                      this.props.content.photo ? <div style={pictureStyles}></div> : null
                    }
                    <div className={classes.DrinkDiv}>
                        <p>{this.props.content.beer_name}</p>
                        <p>€ = <strong>{beerPrice[0]}.{beerPrice[1]}</strong></p>
                    </div>
                    <br />
                    { 
                        this.props.content.cider_name && ciderPrice ? ( 
                        <div className={classes.DrinkDiv}>
                            <p>Cider: {this.props.content.cider_name}</p>
                            <p>€ = <strong>{ciderPrice[0]}.{ciderPrice[1]}</strong></p>
                        </div>
                         ) : null
                    }
                    { 
                        this.props.content.longdrink_name && longdrinkPrice ? (
                        <div className={classes.DrinkDiv}>
                            <p>Longdrink: {this.props.content.longdrink_name}</p>
                            <p>€ = <strong>{longdrinkPrice[0]}.{longdrinkPrice[1]}</strong></p>
                        </div>) : null
                    }

                    <div className={classes.CenteredDiv}>
                        <Button variant="outlined" onClick={() => createReittiopasUrl(this.props)}> Road to Beer! <i className="material-icons">tram</i> </Button>
                    </div>
                    <p style={{textAlign: 'center', margin: '0'}}> --- or --- </p>
                    <div className={classes.CenteredDiv}>
                        <Button variant="outlined" onClick={this.onHandleDisplayCitybikes}> {this.state.cityBikeText} citybikes! <i className="material-icons">directions_bike</i> </Button>
                    </div>
                   { this.state.showCitybikes ? <CityBikes/> : null }
                </div>
            </Popup>
        )
    }
}

export default beverageCustomPopup;