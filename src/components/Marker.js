import * as React from "react";


const Marker = ({coords}) => {
    const [marker, setMarker] = React.useState();

    React.useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker({
                position: coords,
                label: "PDMIG"
            }));
        }
    }, [marker]);

    return null;
}

export default Marker;
