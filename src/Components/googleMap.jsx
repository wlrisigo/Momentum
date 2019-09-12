import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const config = require('../config/config');

export class MapContainer extends Component {

    render() {
        const style = {
            width: '40%',
            height: '40%',
            marginLeft: '27.5%',
            marginTop: '29.5px',
            position: 'relative'
        }
        return (
            <Map google={this.props.google}
                 style={style}
                 initialCenter={{
                     lat: 43.628772,
                     lng:  -70.329398
                 }}
                 zoom={12}
            >

                <Marker
                        name={'Current location'} />

            </Map>
        );
    }
}

console.log(config);

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDzfDoTe8KLgTgjkXPXo66RAfcVNhGfGPE'
})(MapContainer)
