import {Button, Col, Container, FloatingLabel, Form, Image, Row, Stack} from "react-bootstrap";
import logo from "../../res/logo2.png";
import {useNavigate} from "react-router";
import {_loginUser} from "../../api/auth";
import * as React from "react";
import {useState} from "react";
import {tokenKey} from "../../utilities/apiHelpers";
import AlertMessage from "../AlertsComponents/AlertMessage";
import NavigateButton from "../ButtonsComponents/NavigateButton";

function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleCloseMessage = () => setShowMessage(false);
    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage({
            message: message,
            variant: variant,
            title: title,
            buttonText1: button,
        })
        setShowMessage(true);
    }


    const handleClickLogin = async () => {
        if (login === "" || password === ""){
           return handleShowMessage("Por favor, preencha todos os Campos!", "Atenção", "OK", 'warning')
        }
        else{
            await _loginUser(login, password).then(res=>{
                if(res.status === 401){
                    handleShowMessage("Login ou Senha estão incorretos!", "Atenção", "OK", 'warning')
                } else if (res.status === 202){
                    localStorage.setItem(tokenKey, res.token)
                    navigate("/")
                    window.location.reload(false)
                } else {
                    handleShowMessage("Algo deu Errado, tente novamente!", "Atenção", "OK", 'warning')
                }
            })
        }
    }

    return(
        < Container className="mt-5">
            <Row className="mt-5 justify-content-around">
                <Col md={2}>
                    <Image className="m-auto align-self-center login-image" alt="Imagem logo" src={logo} fluid="md"/>
                    <h1 className="text-center blue-text fw-bolder align-items-center m-auto">Login</h1>
                </Col>
                <Col md={8}>
                    <Form className="mt-5 px-5">
                        <Stack direction="vertical" gap={5}>
                            <FloatingLabel controlId="login" label="Login">
                                <Form.Control type="text" value={login} onChange={event => setLogin(event.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="password" label="Senha">
                                <Form.Control type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                            </FloatingLabel>
                            <Button onClick={()=>[handleClickLogin()]}>Login</Button>
                            <NavigateButton
                                label={"Cadastro"}
                                navigateTo={"/register"}
                            />
                        </Stack>
                    </Form>
                </Col>
            </Row>
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={handleCloseMessage}
            />
        </Container>
    );
}

export default Login;
