import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import * as React from "react";

const apiKey = "AIzaSyBqf5fQ0QbH_qi-7glF_uwFV8qkc2kmYYE";
const coords = { lat: -23.551671878555243, lng: -46.63081900021727 };
const zoom = 16;

const render = (status) => {
    return <p>{status}</p>
};

console.log("API" + apiKey);

const MapWrapper = () => (
    <Wrapper apiKey={apiKey} render={render}>
        <Map coords={coords} zoom={zoom}/>
    </Wrapper>

);

export default MapWrapper;
