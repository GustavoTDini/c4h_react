import {Button, Card, Container} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {tokenKey} from "../../utilities/apiHelpers";
import ConfirmationButton from "../ButtonsComponents/ConfirmationButton";
import AddAddress from "./AddAdress";
import {_deleteAddress} from "../../api/address";


function AddressCard({address, refreshData, userId}){
    const [showAddress, setShowAddress]= useState(false);

    const handleCloseAddress = () =>{
        setShowAddress(false);
        refreshData()
    }
    const handleShowAddress = () => setShowAddress(true);

    const handleDeleteAddress = () => {
        _deleteAddress(localStorage.getItem(tokenKey), address.id)
            .then(refreshData())
    }

    return(
        <Container className="card-size m-2">
            <Card className="card-size">
                <Card.Header>
                    <Card.Title>
                        {address.nome}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{`${address.logradouro} nº${address.numero},`}{address.complemento? address.complemento:""}</Card.Text>
                    <Card.Text>{`CEP: ${address.cep} - ${address.bairro}`}</Card.Text>
                    <Card.Text>{`${address.cidade}, ${address.estado} - ${address.pais}`}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Container className="d-flex justify-content-between">
                        <Button onClick={()=>handleShowAddress()}>Editar</Button>
                        <ConfirmationButton
                            className="w-25"
                            label = {"Apagar"}
                            message = {"Deseja apagar este endereço?"}
                            variant = {"warning"}
                            title = {"Delete"}
                            size={"sm"}
                            handleConfirm = {()=>handleDeleteAddress()}
                        />
                    </Container>
                </Card.Footer>
            </Card>
            <AddAddress
                show={showAddress}
                handleClose={handleCloseAddress}
                id={address.id}
                userId={userId}/>
        </Container>
    )
}

export default AddressCard
