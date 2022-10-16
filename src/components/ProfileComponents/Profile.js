import {Button, Col, Container, FloatingLabel, Form, Image, Row, Stack} from "react-bootstrap";
import medal from "../../res/certificado.png";
import {useState} from "react";
import {useNavigate} from "react-router";
import AddPhone from "./AddPhone";
import AddAdress from "./AddAdress";

function Profile() {
    const CPF = "CPF";
    const CNPJ = "CNPJ"
    const PF = "PF"
    const PJ = "PJ"

    const [code, setCode] = useState(CPF)
    const [pessoa, setPessoa] = useState(PF)
    const [doacao, setDoacao] = useState(true)
    const [assina, setAssina] = useState(true)
    const [admin, setAdmin] = useState(true)
    const [showPhone, setShowPhone] = useState(false);
    const [showAdress, setShowAdress] = useState(false);

    const handleClosePhone = () => setShowPhone(false);
    const handleShowPhone = () => setShowPhone(true);

    const handleCloseAdress = () => setShowAdress(false);
    const handleShowAdress = () => setShowAdress(true);

    const navigate = useNavigate();

    const handleClickAdmin = () => {
        navigate("/admin")
    }

    return(
        < Container className="mt-5 mb-5">
            <Row className="mt-5 justify-content-around">
                <Col md={4}>
                    <h1 className="light-blue-text fw-bold text-start">PERFIL</h1>
                </Col>
                <Col md={4}>
                    {assina?<h3>Assinatura programada</h3>:<div/>}
                </Col>
                <Col md={4}>
                    {doacao?<div className="d-flex align-self-center justify-content-end">
                        <h3>Doador Yeah!!</h3>
                        <Image className="medal-image" alt="medalha" src={medal}/>
                    </div>:<div/>}
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
            </Row>
            <Row className="mt-5 justify-content-start">
                <Col md={8}>
                    <Stack className="justify-content-between" direction="horizontal">
                        <Form.Label className="blue-text h4">Endereços:</Form.Label>
                        <Button className="w-50" onClick={()=> handleShowAdress()}>Adicionar Endereço</Button>
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
                <Col md="3">
                    <Button className="w-100" size="lg">Alterar Senha</Button>
                </Col>
                <Col md="3">
                    <Button className="w-100" size="lg">Atualizar Dados</Button>
                </Col>
                <Col md="3">
                    <Button className="w-100" size="lg">Sair</Button>
                </Col>
                {admin?
                    <Col md="3">
                        <Button className="w-100" size="lg" onClick={() => handleClickAdmin()}>Administrador</Button>
                    </Col>:<div/>}
            </Row>
            <AddPhone show={showPhone} handleClose={handleClosePhone}/>
            <AddAdress show={showAdress} handleClose={handleCloseAdress}/>
        </Container>
    );
}

export default Profile;
