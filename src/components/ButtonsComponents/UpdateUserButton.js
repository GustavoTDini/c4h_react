import * as React from "react";
import {useState} from "react";
import AlertMessage from "../AlertsComponents/AlertMessage";
import {tokenKey} from "../../utilities/apiHelpers";
import {Button} from "react-bootstrap";
import ConfirmMessage from "../AlertsComponents/ConfirmMessage";
import {_updateUser} from "../../api/users";

function UpdateUserButton({id, login, cpf, nome, email, cnpj, razaoSocial, url, dataNascimento, admin, voluntario, colaborador, foto, changed}){

    const [showConfirm, setShowConfirm] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage({
            message: message,
            variant: variant,
            title: title,
            buttonText: button,
        })
        setShowMessage(true);
    }

    const handleConfirmUpdate = async () => {
        if (!changed){
            handleShowMessage("Nada foi alterado!", "Ops", "Tente novamente", "warning")
        } else {
            setShowConfirm(true)
        }
    }

    const handleUpdateUser = async () => {
        await _updateUser(localStorage.getItem(tokenKey), id, login, cpf, nome, email, cnpj, razaoSocial, url, dataNascimento, admin, voluntario, colaborador, foto).then(
            res => {
                console.log(res)
                if (res.status === 200){
                    handleShowMessage("Usuário Atualizado", "Atualizado", "Retornar", "success")
                } else{
                    handleShowMessage("Algo deu Errado, por favor tente novamente", "Ops", "Tente novamente", "warning")
                }
            })
        setShowConfirm(false)
    }

    return(
        <>
            <Button size="lg" className="w-100" onClick={() => handleConfirmUpdate()}>Atualizar Usuário</Button>
            <ConfirmMessage
                message={{
                    message: "Confirma a Atualização do usuário com os dados novos!",
                    variant: "success",
                    title: "Confirme",
                }}
                show={showConfirm}
                handleCancel={()=>setShowConfirm(false)}
                handleConfirm={()=>handleUpdateUser()}
            />
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={()=>setShowMessage(false)}
            />
        </>
    )
}

export default UpdateUserButton
