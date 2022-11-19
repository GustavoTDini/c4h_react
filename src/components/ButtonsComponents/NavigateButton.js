import {Button} from "react-bootstrap";
import * as React from "react";
import {useNavigate} from "react-router";


function NavigateButton({label, navigateTo, size, className}){

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(navigateTo)
    }

    return(
        <Button className={className} size={size} onClick={event => handleNavigate()}>{label}</Button>
    )
}

export default NavigateButton
