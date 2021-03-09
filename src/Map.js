import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NvbWV0aW1lcyIsImEiOiJja20xbnF1ZWgwa2FjMm9tOXBpeWcxZ3l1In0.xtREw0TINY-mVkKPhIFy9Q'

class Mapp extends Component {
    constructor(props){
        super(props);
        this.state = {
            lng: -117.8532,
            lat: 34.0297,
            zoom: 8.70
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })
    }

    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width: '80%', height: '80vh', margin: '0 auto'}}/>
            </div>
        )
    }
}


export default Mapp;
