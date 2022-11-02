import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import * as React from "react";

const MapWrapper = () => {


    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const coords = { lat: -23.551671878555243, lng: -46.63081900021727 };
    const zoom = 16;
    const render = (status) => {
        return <p>{status}</p>
    };
    return(
        <div>
            <Wrapper apiKey={apiKey} render={render}>
                <Map coords={coords} zoom={zoom}/>
            </Wrapper>
            <br/>
            <h1>{apiKey}</h1>
        </div>


    )

}

export default MapWrapper;
