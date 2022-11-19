import {Button} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import ChangePassword from "./ChangePassword";


function UpdatePasswordButton(){

    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
            <Button className="w-100" size="lg" onClick={()=>setShowPassword(true)}>Alterar Senha</Button>
            <ChangePassword show={showPassword} handleClose={()=>setShowPassword(false)}/>
        </>

    )
}

export default UpdatePasswordButton
