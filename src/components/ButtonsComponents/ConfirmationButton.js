import {Button} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import ConfirmMessage from "../AlertsComponents/ConfirmMessage";


function ConfirmationButton({label, message, variant, title, handleConfirm, size}){
    const [showConfirm, setShowConfirm] = useState(false);

    return(
        <>
            <Button size={size} onClick={() => setShowConfirm(true)}>{label}</Button>
            <ConfirmMessage
                message={{
                    message: message,
                    variant: variant,
                    title: title,
                }}
                show={showConfirm}
                handleCancel={()=>setShowConfirm(false)}
                handleConfirm={()=>handleConfirm()}
            />
        </>

    )
}

export default ConfirmationButton
