import React from 'react';
import { GoogleMap, withGoogleMap, Marker, withScriptjs } from "react-google-maps";

const GOOGLE_API_KEY= 'AIzaSyAYzmn8NnI9EPHKhuKm-lAaXdQtnm22FaA';

const MapLib = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
))

const Map = (props) => {
    return <MapLib
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        {...props}
    />
}
export default Map;