import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import AddPhone from "./AddPhone";
import PhoneCard from "./PhoneCard";

function ShowPhone() {
    const [showPhone, setShowPhone] = useState(false);

    const handleClosePhone = () => setShowPhone(false);
    const handleShowPhone = () => setShowPhone(true);

    return(
        <Container>
            <Row className="mt-5 justify-content-start">
                <Col md={8}>
                    <Stack className="justify-content-between" direction="horizontal">
                        <Form.Label className="blue-text h4">Telefones:</Form.Label>
                        <Button className="w-50" onClick={()=> handleShowPhone()}>Adicionar Telefone</Button>
                    </Stack>
                </Col>
            </Row>
            <Row className="mt-2 justify-content-start card-scroll" style={{height: "250px"}}>
                <Stack direction="horizontal">
                    <PhoneCard/>
                </Stack>
            </Row>
            <AddPhone show={showPhone} handleClose={handleClosePhone}/>
        </Container>


    );
}

export default ShowPhone;
