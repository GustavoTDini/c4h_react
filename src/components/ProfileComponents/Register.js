import {Button, Col, Container, FloatingLabel, Form, Image, Row, Stack} from "react-bootstrap";
import {useState} from "react";

function Login() {
    const CPF = "CPF";
    const CNPJ = "CNPJ"
    const PF = "PF"
    const PJ = "PJ"

    const [code, setCode] = useState(CPF)
    const [pessoa, setPessoa] = useState(PF)

    const handleChangePessoa = (e) => {
        e.persist();
        setPessoa(e.target.value);
        console.log(pessoa)
        if (e.target.value === PJ){
            setCode(CNPJ)
        } else{
            setCode(CPF)
        }
    };

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
                                    value={PF}
                                    type="radio"
                                    label="Pessoa Física"
                                    id="checkPf"
                                    onChange={handleChangePessoa}
                                    checked={pessoa === PF}
                                />
                                <Form.Check
                                    inline
                                    value={PJ}
                                    type="radio"
                                    label="Pessoa Jurídica"
                                    id="checkPj"
                                    onChange={handleChangePessoa}
                                    checked={pessoa === PJ}
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
                            <FloatingLabel controlId="code" label={code}>
                                <Form.Control type="text" placeholder={code} />
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
