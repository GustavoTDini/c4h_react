import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";
import clicks from "async";


function Map() {

    const render = (status) => {
        return <h1>{status}</h1>;
    };

    const Map: React.FC<> = () => {
        const ref = React.useRef<HTMLDivElement>(null);
        const [map, setMap] = React.useState<google.maps.Map>();

        React.useEffect(() => {
            if (ref.current && !map) {
                setMap(new window.google.maps.Map(ref.current, {}));
            }
        }, [ref, map]);
    }
    return(
        <div style={{ display: "flex", height: "100%" }}>
            <Wrapper apiKey={"AIzaSyCxOqfnHMez82o9w7UclvObNLf7hlik72s"} render={render}>
                <Map/>
            </Wrapper>
        </div>
    );
}

export default Map;
