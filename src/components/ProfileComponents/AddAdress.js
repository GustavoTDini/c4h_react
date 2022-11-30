import {Button, FloatingLabel, Form, Modal, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import AlertMessage from "../AlertsComponents/AlertMessage";
import {tokenKey} from "../../utilities/apiHelpers";
import {_addAddress, _getAddressById, _updateAddress} from "../../api/address";


function AddAddress({show, handleClose, id, userId}){
    const [tipo, setTipo] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [pais, setPais] = useState("")
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
            _getAddressById(localStorage.getItem(tokenKey), id).then(res => res.message).then(res => {
                setTipo(res.nome)
                setLogradouro(res.logradouro)
                setNumero(res.numero)
                setComplemento(res.complemento)
                setCep(res.cep)
                setBairro(res.estado)
                setCidade(res.cidade)
                setEstado(res.estado)
                setCidade(res.cidade)
                setPais(res.pais)
            })
            setChanged(false)
        } else{
            setChanged(false)
            setTipo("")
            setLogradouro("")
            setNumero("")
            setComplemento("")
            setCep("")
            setBairro("")
            setCidade("")
            setEstado("")
            setCidade("")
            setPais("")
        }
    },[id])

    const handleAddUpdateAddress = () =>{
        if (complemento === ""){
            setComplemento(" ")
        }
        if (tipo === "" || logradouro === "" || numero === "" || cep === ""
            || bairro === "" || cidade === "" || estado === "" || pais === ""){
            handleShowMessage("Por favor, preencha todos os Campos!", "Atenção", "OK", 'warning')
        } else{
            if (id === null){
                _addAddress(localStorage.getItem(tokenKey), tipo, logradouro, numero, cep, complemento, bairro, cidade, estado, pais, userId).then(()=>{
                        setChanged(true)
                        handleShowMessage("Endereço adicionado com sucesso!", "Sucesso", "OK", 'success')
                    }
                )
            } else {
                _updateAddress(localStorage.getItem(tokenKey), tipo, logradouro, numero, cep, complemento, bairro, cidade, estado, pais, id).then(()=>{
                        setChanged(true)
                        handleShowMessage("Endereço atualizado com sucesso!", "Sucesso", "OK", 'success')
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
                <Modal.Title>{id !== null? "Atualizar Endereço":"Adicionar Endereço"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={2}>
                    <FloatingLabel controlId="tipo" label="Tipo">
                        <Form.Control type="text" value={tipo} onChange={event => setTipo(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="logradouro" label="Logradouro">
                        <Form.Control type="text" value={logradouro} onChange={event => setLogradouro(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="numero" label="Número">
                        <Form.Control type="numero" value={numero} onChange={event => setNumero(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="complemento" label="Complemento">
                        <Form.Control type="text" value={complemento} onChange={event => setComplemento(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="cep" label="CEP">
                        <Form.Control type="text" value={cep} onChange={event => setCep(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="bairro" label="Bairro">
                        <Form.Control type="text" value={bairro} onChange={event => setBairro(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="cidade" label="Cidade">
                        <Form.Control type="text" value={cidade} onChange={event => setCidade(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="estado" label="Estado">
                        <Form.Control type="text" value={estado} onChange={event => setEstado(event.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="pais" label="País">
                        <Form.Control type="text" value={pais} onChange={event => setPais(event.target.value)}/>
                    </FloatingLabel>
                </Stack>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleAddUpdateAddress}>
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

export default AddAddress
