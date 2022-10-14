import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import * as React from "react";

function NavButton({label, location, variant, className}){
    const navigate = useNavigate();
    const handleClick = (location) => {
        navigate(location)
    }

    return(
        <Button className={className} variant={variant} onClick={() => handleClick(location)}>
            {label}
        </Button>
    )
}

export default NavButton
