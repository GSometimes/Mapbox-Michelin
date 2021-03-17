import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
// import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbWV0aW1lcyIsImEiOiJja20xbnF1ZWgwa2FjMm9tOXBpeWcxZ3l1In0.xtREw0TINY-mVkKPhIFy9Q'

// const data = [
//     {
//         "location": "Staples Center",
//         "city": "Los Angeles",
//         "state": "California",
//         "coordinates": [-118.2673, 34.0430]
//     },
//     {
//         "location": "Chinatown",
//         "city": "Los Angeles",
//         "state": "California",
//         "coordinates": [-118.2383, 34.0623]
//     },
//     {
//         "location": "Dodger Stadium",
//         "city": "Los Angeles",
//         "state": "California",
//         "coordinates": [-118.2400, 34.0739]
//     }
// ]


class Mapp extends Component {
    constructor(props){
        super(props);
        this.state = {
            lng: -118.2437,
            lat: 34.0522,
            zoom: 12
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        // data.forEach((location) => {
        //     console.log(location)
        //     let marker = new mapboxgl.Marker()
        //     .setLngLat(location.coordinates)
        //     .addTo(map);
        // })
    }
    

    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width: '80%', height: '80vh', margin: '100px auto'}}/>
            </div>
        )
    }
}


export default Mapp;
