import {Button, Col, Container, FloatingLabel, Form, Image, ListGroup, Row, Stack} from "react-bootstrap";
import medal from "../../res/certificado.png";
import {useState} from "react";
import {useNavigate} from "react-router";
import AddPhone from "./AddPhone";
import AddAddress from "./AddAdress";
import * as React from "react";
import ChangePassword from "./ChangePassword";

function Profile() {
    const CPF = "CPF";
    const CNPJ = "CNPJ"
    const PF = "PF"
    const PJ = "PJ"

    const [code, setCode] = useState(CPF)
    const [pessoa, setPessoa] = useState(PF)
    const [doacao, setDoacao] = useState(true)
    const [assinatura, setAssinatura] = useState(true)
    const [voluntario, setVoluntario] = useState(false)
    const [admin, setAdmin] = useState(true)
    const [showPhone, setShowPhone] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClosePhone = () => setShowPhone(false);
    const handleShowPhone = () => setShowPhone(true);

    const handleCloseAddress = () => setShowAddress(false);
    const handleShowAddress = () => setShowAddress(true);

    const handleClosePassword = () => setShowPassword(false);
    const handleShowPassword = () => setShowPassword(true);

    const handleSetVoluntario = () => setVoluntario(!voluntario);

    const navigate = useNavigate();

    const handleClickAdmin = () => {
        navigate("/admin")
    }

    return(
        < Container className="mt-5 mb-5">
            <Row className="mt-5 justify-content-start">
                <Col md="4" className="mt-2 mb-2">
                    <h1 className="light-blue-text fw-bold text-start">PERFIL</h1>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-around">

                <Col md="4" className="mt-2 mb-2 d-flex justify-content-center">
                    <Stack className="align-items-center">
                        <Form.Check
                            type="switch"
                            id="switch-Voluntário"
                            label="Voluntário"
                            onClick={()=> handleSetVoluntario()}
                            value={voluntario}
                            size="lg"/>
                        {voluntario?<div>
                            <h3 className="text-center mt-2">Beleza, bora ajudar!</h3>
                        </div>:<div/>}
                    </Stack>
                </Col>
                <Col md="4" className="mt-2 mb-2">
                    {assinatura?<div>
                        <h3 className="text-center">Assinatura programada</h3>
                        <Button className="w-100">Cancelar Assinatura</Button>
                    </div>:<div/>}
                </Col>
                <Col md="4" className="mt-2 mb-2">
                    {doacao?
                        <Stack gap={1} direction={"vertical"} className="m-auto align-items-center">
                            <Image className="medal-image" alt="medalha" src={medal}/>
                            <h3>Doador Yeah!!</h3>
                        </Stack>:<div/>}
                </Col>
            </Row>
            <Row className="mt-5 justify-content-lg-start">
                <Col md={8}>
                    <Stack gap={2}>
                        <FloatingLabel controlId="login" label="Login">
                            <Form.Control type="text" />
                        </FloatingLabel>
                        <FloatingLabel controlId="code" label={code}>
                            <Form.Control type="text"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="name" label="Nome">
                            <Form.Control type="text"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="email" label="E-mail">
                            <Form.Control type="email"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="url" label="URL">
                            <Form.Control type="text"/>
                        </FloatingLabel>
                        {pessoa === PF?<FloatingLabel controlId="url" label="Date de Nascimento">
                                <Form.Control type="date"/>
                        </FloatingLabel>:<div/>}
                    </Stack>
                </Col>
                <Col md={4}>
                    {doacao?<div className="d-flex align-self-center justify-content-end">
                        <Stack className="w-100 list-height p-0 mb-5" gap={4}>
                            <h2 className="blue-text mt-3 text-center">Minhas Doações</h2>
                            <Container className="list-scroll list-height">
                                <ListGroup>
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
                        </Stack>
                    </div>:<div/>}

                </Col>
            </Row>
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
            <Row className="mt-5 justify-content-start">
                <Col md={8}>
                    <Stack className="justify-content-between" direction="horizontal">
                        <Form.Label className="blue-text h4">Telefones:</Form.Label>
                        <Button className="w-50" onClick={()=> handleShowPhone()}>Adicionar Telefone</Button>
                    </Stack>
                </Col>
            </Row>
            <Row className="mt-2 justify-content-start" style={{height: "200px"}}>
            </Row>
            <Row className="mt-5 justify-content-start">
                <Col md="3" className="mt-2 mb-2">
                    <Button className="w-100" size="lg" onClick={()=> handleShowPassword()}>Alterar Senha</Button>
                </Col>
                <Col md="3" className="mt-2 mb-2">
                    <Button className="w-100" size="lg">Atualizar Dados</Button>
                </Col>
                <Col md="3" className="mt-2 mb-2">
                    <Button className="w-100" size="lg">Sair</Button>
                </Col>
                {admin?
                    <Col md="3" className="mt-2 mb-2">
                        <Button className="w-100" size="lg" onClick={() => handleClickAdmin()}>Administrador</Button>
                    </Col>:<div/>}
            </Row>
            <AddPhone show={showPhone} handleClose={handleClosePhone}/>
            <AddAddress show={showAddress} handleClose={handleCloseAddress}/>
            <ChangePassword show={showPassword} handleClose={handleClosePassword}/>
        </Container>
    );
}

export default Profile;
