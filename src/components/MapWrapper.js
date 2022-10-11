import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import * as React from "react";
import Marker from "./Marker";

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const coords = { lat: -23.551671878555243, lng: -46.63081900021727 };
const zoom = 16;

const render = (status) => {
    return <p>{status}</p>
};

console.log("API" + apiKey);

const MapWrapper = () => (
    <Wrapper apiKey={apiKey} render={render}>
        <Map coords={coords} zoom={zoom}>
            <Marker coords={coords}/>
        </Map>
    </Wrapper>

);

export default MapWrapper;
