import * as React from "react";

function Map({zoom, coords}) {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center: coords,
                zoom: zoom
            }));
        }
        const marker = new window.google.maps.Marker({
            position: coords,
            label: "PDMIG",
            map: map,
        });
    }, [ref, map]);

    return(
        <div ref={ref} id="map" className="map map-container"/>
    )
}

export default Map;
