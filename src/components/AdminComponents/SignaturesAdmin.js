import {Button, Col, Container, ListGroup, Row, Stack} from "react-bootstrap";
import * as React from "react";

const SignaturesAdmin = () => {

    return(
        <Container>
            <Row>
                <Col md={8}>
                    <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                        <h2 className="blue-text mt-3">Assinturas</h2>
                        <Container className="list-scroll list-height-large">
                            <ListGroup variant="flush">
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                            </ListGroup>
                        </Container>
                        <Button className="w-100">Verificar Assinatura</Button>
                    </Stack>
                </Col>
                <Col md={4}>
                    <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                        <h2 className="blue-text mt-3 text-center">Total de Assinaturas prevista no mês</h2>
                        <h4 className="blue-text text-center">Em Janeiro de 2022, foram doados no total R$ 1.500,00</h4>
                    </Stack>
                </Col>
            </Row>

        </Container>



    )
}

export default SignaturesAdmin
