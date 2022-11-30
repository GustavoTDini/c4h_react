import {Button, Card, Container} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import AddPhone from "./AddPhone";
import ConfirmationButton from "../ButtonsComponents/ConfirmationButton";
import {_deletePhone} from "../../api/phone";
import {tokenKey} from "../../utilities/apiHelpers";


function PhoneCard({phone, refreshData, userId}){
    const [showPhone, setShowPhone]= useState(false);

    const handleClosePhone = () =>{
        setShowPhone(false);
        refreshData()
    }
    const handleShowPhone = () => setShowPhone(true);

    const handleDeletePhone = () => {
        _deletePhone(localStorage.getItem(tokenKey), phone.id)
            .then(refreshData())
    }


    return(
        <Container className="card-size m-2">
            <Card className="card-size">
                <Card.Header>
                    <Card.Title>
                        {phone.nome}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{`(${phone.ddd}) ${phone.numero}`}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Container className="d-flex justify-content-between">
                        <Button onClick={()=>handleShowPhone()}>Editar</Button>
                        <ConfirmationButton
                            className="w-25"
                            label = {"Apagar"}
                            message = {"Deseja apagar este telefone?"}
                            variant = {"warning"}
                            title = {"Delete"}
                            size={"sm"}
                            handleConfirm = {()=>handleDeletePhone()}
                        />
                    </Container>
                </Card.Footer>
            </Card>
            <AddPhone
                show={showPhone}
                handleClose={handleClosePhone}
                id={phone.id}
                userId={userId}/>
        </Container>
    )
}

export default PhoneCard
