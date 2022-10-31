import {Button, Col, Container, Dropdown, DropdownButton, InputGroup, ListGroup, Row, Stack} from "react-bootstrap";
import DonationChart from "./DonationChart";
import * as React from "react";
import {useState} from "react";

const DonationsAdmin = () => {
    const [ano, setAno] = useState(null)
    const [mes, setMes] = useState(null)

    const meses = [
        {"nome":"Janeiro",
            "numero": 1},
        {"nome":"Fevereiro",
            "numero": 2},
        {"nome":"Março",
            "numero": 3},
        {"nome":"Abril",
            "numero": 4},
        {"nome":"Maio",
            "numero": 5},
        {"nome":"Junho",
            "numero": 6},
        {"nome":"Julho",
            "numero": 7},
        {"nome":"Agosto",
            "numero": 8},
        {"nome":"Setembro",
            "numero": 9},
        {"nome":"Outubro",
            "numero": 10},
        {"nome":"Novembro",
            "numero": 11},
        {"nome":"Dezembro",
            "numero": 12},
    ]
    const anos = [2022, 2023, 2024, 2025]

    useState(()=>{
        setAno(anos[0])
        setMes(meses[0].nome)
    })

    const selectMes = (e) =>{
        console.log(e)
        setMes(e)
    }

    const selectAno = (e) =>{
        setAno(e)
    }

    return(
        <Container>
            <Row>
            <Col md={4}>
                <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                    <h2 className="blue-text mt-3">Doações</h2>
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
                    <Button className="w-100">Verificar Doação</Button>
                </Stack>
            </Col>
            <Col md={4}>
                <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                    <h2 className="blue-text mt-3 text-center">Doações por Mês</h2>
                    <Button className="w-100" size="lg">Verificar</Button>
                    <Stack className="justify-content-between mt-2" direction="horizontal">
                        <InputGroup className="mb-3 w-auto">
                            <InputGroup.Text id="basic-addon1">Mês</InputGroup.Text>
                            <DropdownButton
                                variant="outline-secondary"
                                title={mes}
                                id="input-group-dropdown-2"
                                align="end"
                                onSelect={selectMes}
                            >
                                {meses.map((mes)=>(
                                    <Dropdown.Item
                                        eventKey={mes.nome}
                                    >{mes.nome}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </InputGroup>
                        <InputGroup className="mb-3 w-auto">
                            <InputGroup.Text id="basic-addon1">Ano</InputGroup.Text>
                            <DropdownButton
                                variant="outline-secondary"
                                title={ano}
                                id="input-group-dropdown-2"
                                align="end"
                                onSelect={(e) => selectAno(e)}
                            >
                                {anos.map((ano)=>(
                                    <Dropdown.Item
                                        eventKey={ano}
                                    >{ano}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </InputGroup>
                    </Stack>
                    <h4 className="blue-text text-center">Em Janeiro de 2022, foram doados no total R$ 1.500,00</h4>
                </Stack>
            </Col>
        </Row>
    <Row className="justify-content-end">
        <DonationChart/>
    </Row>

</Container>



    )
}

export default DonationsAdmin

