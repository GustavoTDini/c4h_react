import {Button, Col, Container, FloatingLabel, Form, Image, InputGroup, ListGroup, Row, Stack} from "react-bootstrap";
import searchIcon from "../../res/search.svg";
import * as React from "react";
import {useEffect, useState} from "react";
import {_getAllUsers} from "../../api/users";
import {showUsers} from "../../utilities/HelperFunctions";
import ShowAddress from "../ProfileComponents/ShowAddress";
import ShowPhone from "../ProfileComponents/ShowPhone";

const UsersAdmin = () => {
    let [users, setUsers] = useState(null)
    let [selectedUser, setSelectedUser] = useState(1)

    useEffect( () => {
        _getAllUsers().then(res => setUsers(res))
    },[])

    return (
        <Row>
            <h2 className="blue-text">Usuários</h2>
            <Col md={6}>
            <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                    <InputGroup>
                        <Form.Control/>
                        <Button variant="outline-primary">
                            <Image src={searchIcon} alt="icon de lupa" className="mr-4"/>
                            Buscar
                        </Button>
                    </InputGroup>
                    <Container className="list-scroll list-height-large">
                        <ListGroup variant="flush">
                            {users != null && users.map((user)=>(
                                <ListGroup.Item key={user.id} action>{showUsers(user)}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Container>
                    <Stack direction="horizontal" gap={2}>
                        <Button className="w-75">Alterar</Button>
                        <Button className="w-75">Apagar</Button>
                    </Stack>
            </Stack>
            </Col>
            <Col md={6}>
                {
                    selectedUser!== null &&
                    <Stack gap={2}>
                        <FloatingLabel controlId="login" label="Login">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        {/*<FloatingLabel controlId="code" label={selectedUser.cpf !== null?"CPF": "CNPJ"}>*/}
                        {/*    <Form.Control type="text"/>*/}
                        {/*</FloatingLabel>*/}
                        <FloatingLabel controlId="name" label="Nome">
                            <Form.Control type="text"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="email" label="E-mail">
                            <Form.Control type="email"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="url" label="URL">
                            <Form.Control type="text"/>
                        </FloatingLabel>
                        {/*{selectedUser.cpf !== null?<FloatingLabel controlId="url" label="Date de Nascimento">*/}
                        {/*    <Form.Control type="date"/>*/}
                        {/*</FloatingLabel>:<div/>}*/}
                        <ShowAddress/>
                        <ShowPhone/>
                        <Form.Check
                            type="switch"
                            id="switch-administrador"
                            label="Administrador"
                            size="lg"/>
                        <Form.Check
                            type="switch"
                            id="switch-colaborador"
                            label="Colaborador"
                            size="lg"/>
                        <Form.Check
                            type="switch"
                            id="switch-Voluntário"
                            label="Voluntário"
                            size="lg"/>
                        <Button className="w-100">Adicionar Foto de Colaborador</Button>
                    </Stack>


                }

            </Col>

        </Row>


    )
}

export default UsersAdmin
