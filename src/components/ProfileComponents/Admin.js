import {
    Button,
    Col,
    Container, Dropdown,
    DropdownButton,
    Form,
    Image,
    InputGroup, ListGroup,
    Row,
    Stack
} from "react-bootstrap";
import {useState} from "react";
import DonationChart from "./DonationChart";
import {useNavigate} from "react-router";
import searchIcon from "../../res/search.svg";
import * as React from "react";

function Admin() {
    const [ano, setAno] = useState(null)
    const [mes, setMes] = useState(null)
    const navigate = useNavigate();


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

    const handleClickAddBLog = ()=>{
        navigate("/addBlog")
    }



    return(
        < Container className="mt-5 mb-2">
            <Row className="mt-5 justify-content-start">
                <Col md={4}>
                    <h1 className="light-blue-text fw-bold text-start">ADMINISTRADOR</h1>
                </Col>
            </Row>
            <Row className="mt-3 justify-content-lg-start h-auto">
                <Col md={4}>
                    <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                        <h2 className="blue-text">Usuários</h2>
                        <InputGroup>
                            <Form.Control/>
                            <Button variant="outline-primary">
                                <Image src={searchIcon} alt="icon de lupa" className="mr-4"/>
                                Buscar
                            </Button>
                        </InputGroup>
                        <Container className="list-scroll list-height-large">
                            <ListGroup>
                                <ListGroup.Item>Gustavo 32598487893</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Gustavo 32598487893</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Gustavo 32598487893</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Gustavo 32598487893</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Gustavo 32598487893</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Gustavo 32598487893</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>

                            </ListGroup>
                        </Container>
                        <Stack direction="horizontal" gap={2}>
                            <Button className="w-75">Alterar</Button>
                            <Button className="w-75">Apagar</Button>
                        </Stack>
                        <Button className="w-100">Definir como Administrador</Button>
                    </Stack>
                </Col>
                <Col md={4}>
                    <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                        <h2 className="blue-text mt-3">Doações</h2>
                        <Container className="list-scroll list-height-large">
                            <ListGroup>
                                <ListGroup.Item>Gustavo 32598487893</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
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
            <Row className="mt-5 justify-content-end">
                <Col md="3">
                    <Button className="w-100 mb-3" size="lg" onClick={()=>handleClickAddBLog()}>Adicionar Relatórios</Button>
                </Col>
                <Col md="3">
                    <Button className="w-100 mb-3" size="lg" onClick={()=>handleClickAddBLog()}>Ver Blogs</Button>
                </Col>
                <Col md="3">
                    <Button className="w-100 mb-3" size="lg" onClick={()=>handleClickAddBLog()}>Adicionar Blog</Button>
                </Col>
                <Col md="3">
                    <Button className="w-100 mb-3" size="lg">Sair</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Admin;
