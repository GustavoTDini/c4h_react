import {Button, Col, Container, FloatingLabel, Form, Image, Row, Stack} from "react-bootstrap";
import {useState} from "react";

function Register() {

    return(
        < Container className="mt-5 mb-5">
            <Row className="mt-5 justify-content-around">
                <Col md={6}>
                    <h1 className="text-center blue-text fw-bolder align-items-center m-auto">Adicionar nova Entrada de Blog</h1>
                    <Form className="mt-5 px-5">
                        <Stack direction="vertical" gap={5}>
                            <FloatingLabel controlId="titulo" label="Titulo">
                                <Form.Control type="text"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="texto" label="Texto" className="h-auto">
                                <Form.Control as="textarea" rows={10} />
                            </FloatingLabel>
                            <div>
                                <Form.Label>Adicione uma Imagem</Form.Label>
                                <Form.Control type="file" accept=".png, .jpg, .jpeg"/>
                            </div>

                            <Button className="yellow-background border-0 blue-text fw-bold" size="lg">Cadastrar</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
