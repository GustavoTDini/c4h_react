import * as React from "react";
import {useState} from "react";
import {_logoutUser} from "../../api/auth";
import {tokenKey} from "../../utilities/apiHelpers";
import {useNavigate} from "react-router";
import AlertMessage from "../AlertsComponents/AlertMessage";
import ConfirmationButton from "./ConfirmationButton";

function LogoutButton(){
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);

    const handleLogout = async () => {
        return await _logoutUser(localStorage.getItem(tokenKey)).then((res)=>{
            if(res.status === 500 || res.message ==="Unauthenticated.") {
                setShowMessage(true)
            }
            localStorage.clear(tokenKey)
            navigate("/")
            window.location.reload(false)
        })
    }

    return(
    <>
        <ConfirmationButton
            label = {"Sair"}
            message = {"Deseja Realmente sair?"}
            variant = {"primary"}
            title = {"Confirme"}
            handleConfirm = {()=>handleLogout()}
        />
        <AlertMessage
            message={{
                message:"Algo deu errado, retornando a tela inicial!",
                title: "Alerta",
                variant: "danger",
                buttonText: "Ok"
            }}
            show={showMessage}
            handleButton={()=>setShowMessage(false)}
        />
    </>)
}

export default LogoutButton
