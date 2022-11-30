import {Button, FloatingLabel, Form, Modal, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import {_addPhone, _getPhoneById, _updatePhone} from "../../api/phone";
import {tokenKey} from "../../utilities/apiHelpers";
import AlertMessage from "../AlertsComponents/AlertMessage";


function AddPhone({show, handleClose, id, userId}){
    const [tipo, setTipo] = useState("")
    const [ddd, setDdd] = useState("")
    const [numero, setNumero] = useState("")
    const [changed, setChanged] = useState(false)

    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleCloseMessage = () => {
        setShowMessage(false);
        if (changed){
            handleClose()
        }
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

    useEffect(()=>{
        if (id !== null){
            _getPhoneById(localStorage.getItem(tokenKey), id).then(res => res.message).then(res => {
                setTipo(res.nome)
                setDdd(res.ddd)
                setNumero(res.numero)
            })
            setChanged(false)
        } else{
            setChanged(false)
            setNumero("")
            setTipo("")
            setDdd("")
        }
    },[id])

    const handleAddUpdatePhone = () =>{
        if (tipo === "" || ddd === "" || numero === ""){
            handleShowMessage("Por favor, preencha todos os Campos!", "Atenção", "OK", 'warning')
        } else{
            if (id === null){
                _addPhone(localStorage.getItem(tokenKey), tipo, ddd, numero, userId).then(()=>{
                        setChanged(true)
                        handleShowMessage("Telefone adicionado com sucesso!", "Sucesso", "OK", 'success')
                    }
                )
            } else {
                _updatePhone(localStorage.getItem(tokenKey), tipo, ddd, numero, id).then(()=>{
                        setChanged(true)
                        handleShowMessage("Telefone atualizado com sucesso!", "Sucesso", "OK", 'success')
                    }
                )
            }
        }
    }

    return(
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header>
                <Modal.Title>{id !== null? "Atualizar Telefone":"Adicionar Telefone"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={2}>
                    <FloatingLabel controlId="tipo" label="Tipo">
                        <Form.Control type="text" value={tipo} onChange={event => setTipo(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="ddd" label="DDD">
                        <Form.Control type="number" value={ddd} onChange={event => setDdd(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="numero" label="Número">
                        <Form.Control type="number" value={numero} onChange={event => setNumero(event.target.value)}/>
                    </FloatingLabel>
                </Stack>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleAddUpdatePhone}>
                    {id !== null? "Atualizar":"Adicionar"}
                </Button>
            </Modal.Footer>
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={handleCloseMessage}
            />
        </Modal>
    )
}

export default AddPhone
