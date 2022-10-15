import {
    Button,
    Col,
    Container, Dropdown,
    DropdownButton,
    FloatingLabel,
    Form,
    Image,
    InputGroup,
    Row,
    Stack,
    Table
} from "react-bootstrap";
import medal from "../../res/certificado.png";
import {useState} from "react";

function Admin() {
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

    return(
        < Container className="mt-5 mb-2">
            <Row className="mt-5 justify-content-start">
                <Col md={4}>
                    <h1 className="light-blue-text fw-bold text-start">ADMINISTRADOR</h1>
                </Col>
            </Row>
            <Row className="mt-3 mb-2 justify-content-lg-start">
                <Col md={4}>
                    <h2 className="blue-text mt-3">Usuários</h2>
                    <Container className="w-100 list-height p-0">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Código</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>Gustavo</th>
                                <th>32598487893</th>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                    <Stack direction="horizontal" gap={2}>
                        <Button className="w-75">Alterar</Button>
                        <Button className="w-75">Apagar</Button>
                    </Stack>
                    <Button className="w-100 mt-3">Definir como Administrador</Button>
                </Col>
                <Col md={4}>
                    <h2 className="blue-text mt-3">Doações</h2>
                    <Container className="w-100 list-height p-0">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Dia</th>
                                <th>Valor</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>R$ 100,00</th>
                                <th>15/10/2022</th>
                            </tr>
                            </tbody>
                        </Table>
                    </Container>
                    <Button className="w-100">Alterar</Button>
                </Col>
                <Col md={4}>
                    <h2 className="blue-text mt-3 text-center">Verificar Total de Doações por Mês</h2>
                    <Button className="w-100" size="lg">Verificar</Button>
                    <Stack className="justify-content-between mt-2" direction="horizontal">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Mês</InputGroup.Text>
                            <DropdownButton
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-2"
                                align="end">
                                {meses.map((mes)=>(
                                    <Dropdown.Item>{mes.nome}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Ano</InputGroup.Text>
                            <DropdownButton
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-2"
                                align="end">

                                {anos.map((ano)=>(
                                    <Dropdown.Item>{ano}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </InputGroup>
                    </Stack>
                    <h4 className="blue-text text-center">Em Janeiro de 2022, foram doados no total R$ 1.500,00</h4>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-end">
                <Image/>
            </Row>

            <Row className="mt-5 justify-content-end">
                <Col md="3">
                    <Button className="w-100 mb-3" size="lg">Adicionar Blog</Button>
                </Col>
                <Col md="3">
                    <Button className="w-100 mb-3" size="lg">Sair</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Admin;
