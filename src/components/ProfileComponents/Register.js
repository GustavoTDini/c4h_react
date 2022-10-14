import {Button, Col, Container, FloatingLabel, Form, Image, Row, Stack} from "react-bootstrap";
import logo from "../../res/logo2.png";

function Login() {
    return(
        < Container className="mt-5 mb-5">
            <Row className="mt-5 justify-content-around">
                <Col md={6}>
                    <h1 className="text-center blue-text fw-bolder align-items-center m-auto">Registre-se</h1>
                    <Form className="mt-5 px-5">
                        <Stack direction="vertical" gap={5}>
                            <div  className="justify-content-between d-flex">
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Pessoa Física"
                                    id="checkPf"
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Pessoa Jurídica"
                                    id="checkPj"
                                />
                            </div>
                            <FloatingLabel controlId="login" label="Login">
                                <Form.Control type="text" placeholder="Login" />
                            </FloatingLabel>
                            <FloatingLabel controlId="password" label="Senha">
                                <Form.Control type="password" placeholder="Senha" />
                            </FloatingLabel>
                            <FloatingLabel controlId="email" label="E-mail">
                                <Form.Control type="text" placeholder="Senha" />
                            </FloatingLabel>
                            <Button className="yellow-background border-0 blue-text fw-bold" size="lg">Cadastrar</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
