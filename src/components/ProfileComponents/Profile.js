import {Button, Col, Container, FloatingLabel, Form, Image, ListGroup, Row, Stack} from "react-bootstrap";
import medal from "../../res/certificado.png";
import * as React from "react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import ChangePassword from "./ChangePassword";
import ShowAddress from "./ShowAddress";
import ShowPhone from "./ShowPhone";
import {_logoutUser} from "../../api/auth";
import AlertMessage from "../AlertMessage";
import {CPF, PF, showDonations} from "../../utilities/HelperFunctions";
import {resetToken, tokenKey} from "../../utilities/apiHelpers";
import ConfirmMessage from "../ConfirmMessage";
import {_getDonationsByUser} from "../../api/donations";

function Profile({handleSetUser}) {
    const navigate = useNavigate();

    const [donations, setDonations] = useState({list: [], isFetching: false, fetched: false});
    const [selectedUser, setSelectedUser] = useState(1)

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                setDonations(donations => ({list: donations.list, isFetching: true, fetched: false}));
                const response = await _getDonationsByUser(localStorage.getItem(tokenKey))
                if (response.message === "Unauthenticated."){
                    resetToken(navigate)
                }
                return response.message
            } catch (e) {
                console.log(e);
                return false
            }
        };
        fetchDonations().then(res =>{
            if (res === false){
                setDonations((donations) => ({list: donations.list, isFetching: false, fetched: false}));
            } else{
                setDonations({list: [...res], isFetching: true, fetched: true});
            }
        })
    }, []);


    const [code, setCode] = useState(CPF)
    const [pessoa, setPessoa] = useState(PF)
    const [doacao, setDoacao] = useState(true)
    const [assinatura, setAssinatura] = useState(true)
    const [voluntario, setVoluntario] = useState(false)
    const [admin, setAdmin] = useState(true)
    const [showPassword, setShowPassword] = useState(false);

    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleCloseMessage = () => setShowMessage(false);
    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage({
            message: message,
            variant: variant,
            title: title,
            buttonText: button,
        })
        setShowMessage(true);
    }

    const handleClosePassword = () => setShowPassword(false);
    const handleShowPassword = () => setShowPassword(true);
    const handleSetVoluntario = () => setVoluntario(!voluntario);

    const [showConfirmLogout, setShowConfirmLogout] = useState(false);

    const handleClickAdmin = () => {
        navigate("/admin")
    }

    const handleLogout = async () => {
        return await _logoutUser(localStorage.getItem(tokenKey)).then((res)=>{
            if(res.status === 500 || res.message ==="Unauthenticated.") {
                handleShowMessage("Algo deu errado, retornando a tela inicial!", "Alerta", "Ok", "danger");
            }
            localStorage.setItem(tokenKey, null)
            handleSetUser(false)
            navigate("/")
        })
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
                                    {donations.fetched && donations.list.map((donation)=>(
                                        <ListGroup.Item key={donation.id} action>{showDonations(donation)}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Container>
                        </Stack>
                    </div>:<div/>}

                </Col>
            </Row>
            <ShowAddress/>
            <ShowPhone/>
            <Row className="mt-5 justify-content-start">
                <Col md="3" className="mt-2 mb-2">
                    <Button className="w-100" size="lg" onClick={()=> handleShowPassword()}>Alterar Senha</Button>
                </Col>
                <Col md="3" className="mt-2 mb-2">
                    <Button className="w-100" size="lg">Atualizar Dados</Button>
                </Col>
                <Col md="3" className="mt-2 mb-2">
                    <Button className="w-100" size="lg" onClick={()=>setShowConfirmLogout(true)}>Sair</Button>
                </Col>
                {admin?
                    <Col md="3" className="mt-2 mb-2">
                        <Button className="w-100" size="lg" onClick={() => handleClickAdmin()}>Administrador</Button>
                    </Col>:<div/>}
            </Row>
            <ChangePassword show={showPassword} handleClose={()=>handleClosePassword()}/>
            <ConfirmMessage
                message={{
                    message: "Deseja Realmente sair?",
                    variant: "primary",
                    title: "Confirme",
                }}
                show={showConfirmLogout}
                handleCancel={()=>setShowConfirmLogout(false)}
                handleConfirm={()=>handleLogout()}
            />
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={()=>handleCloseMessage()}
            />
        </Container>
    );
}

export default Profile;
