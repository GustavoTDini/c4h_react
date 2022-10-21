import {Button, Col, Container, FloatingLabel, Form, Image, Row, Stack} from "react-bootstrap";
import logo from "../../res/logo2.png";
import {useNavigate} from "react-router";

function Login({handleSetUser}) {
    const navigate = useNavigate();
    const handleClickRegister = () => {
        navigate("/register")
    }

    const handleClickLogin = () => {
        handleSetUser()
        navigate("/")
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
                                <Form.Control type="text"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="password" label="Senha">
                                <Form.Control type="password" />
                            </FloatingLabel>
                            <Button onClick={()=>handleClickLogin()}>Login</Button>
                            <Button onClick={()=>{handleClickRegister()}}>Cadastro</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
