import * as React from "react";
import {useState} from "react";
import AlertMessage from "../AlertsComponents/AlertMessage";
import {_addSignature} from "../../api/signature";
import {tokenKey} from "../../utilities/apiHelpers";
import {Button} from "react-bootstrap";
import ConfirmMessage from "../AlertsComponents/ConfirmMessage";
import {ASSINATURA, DOACAO} from "../../utilities/HelperFunctions";
import {_addDonation} from "../../api/donations";

function PaymentButton({label, message, tipo, value, day}){

    const [showConfirm, setShowConfirm] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleConfirmPayment = () => {
        if (value > 0){
            setShowConfirm(true)
        } else{
            handleShowMessage("Por Favor insira um valor maior que zero!", "Ops", "Tente novamente", "warning")
        }
    }

    const handleAddPayment = async () => {
        if (tipo === ASSINATURA){
            await _addSignature(localStorage.getItem(tokenKey), value, day).then(
                res => {
                    if (res.status === 201){
                        handleShowMessage("Usuário encaminhado para Sistema de pagamento", "Obrigado", "Retornar", "success")
                    } else{
                        handleShowMessage("Algo deu Errado, por favor tente novamente", "Ops", "Tente novamente", "warning")
                    }
                })
        } else if (tipo === DOACAO){
            await _addDonation(localStorage.getItem(tokenKey), value).then(
                res => {
                if (res.status === 201){
                    handleShowMessage("Usuário encaminhado para Sistema de pagamento", "Obrigado", "Retornar", "success")
                } else{
                    handleShowMessage("Algo deu Errado, por favor tente novamente", "Ops", "Tente novamente", "warning")
                }
                })

        }
        setShowConfirm(false)
    }

    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage({
            message: message,
            variant: variant,
            title: title,
            buttonText: button,
        })
        setShowMessage(true);
    }

    return(
        <>
            <Button size="lg" className="w-100" onClick={() => handleConfirmPayment()}>{label}</Button>
            <ConfirmMessage
                message={{
                    message: message,
                    variant: "success",
                    title: "Confirme",
                }}
                show={showConfirm}
                handleCancel={()=>setShowConfirm(false)}
                handleConfirm={()=>handleAddPayment()}
            />
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={()=>setShowMessage(false)}
            />
        </>

    )
}

export default PaymentButton
