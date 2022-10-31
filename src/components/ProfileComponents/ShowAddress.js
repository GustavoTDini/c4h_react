import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import AddAddress from "./AddAdress";

function ShowAddress() {
    const [showAddress, setShowAddress] = useState(false);

    const handleCloseAddress = () => setShowAddress(false);
    const handleShowAddress = () => setShowAddress(true);

    return(
    <Container>
        <Row className="mt-5 justify-content-start">
            <Col md={8}>
                <Stack className="justify-content-between" direction="horizontal">
                    <Form.Label className="blue-text h4">Endereços:</Form.Label>
                    <Button className="w-50" onClick={()=> handleShowAddress()}>Adicionar Endereço</Button>
                </Stack>
            </Col>
        </Row>
        <Row className="mt-2 justify-content-start" style={{height: "200px"}}>
        </Row>
        <AddAddress show={showAddress} handleClose={handleCloseAddress}/>
    </Container>


    );
}

export default ShowAddress;
