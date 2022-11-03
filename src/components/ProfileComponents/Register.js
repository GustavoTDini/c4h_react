import {Button, Col, Container, FloatingLabel, Form, Row, Stack} from "react-bootstrap";
import {useState} from "react";
import {CNPJ, CPF, PF, PJ, verifyCNPJ, verifyCPF} from "../../utilities/HelperFunctions";
import {_addUser, _verifyUserByColumn} from "../../api/users";
import AlertMessage from "../AlertMessage";

function Register() {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    const [usingCode, setUsingCode] = useState(CPF)
    const [pessoa, setPessoa] = useState(PF)
    const [login, setLogin] = useState("")
    const [code, setCode] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertButton, setAlertButton] = useState("");
    const [alertVariant, setAlertVariant] = useState("");

    const handleCloseMessage = () => setShowMessage(false);
    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage(message)
        setAlertVariant(variant)
        setAlertTitle(title)
        setAlertButton(button)
        setShowMessage(true);
    }


    const handleChangePessoa = (e) => {
        e.persist();
        setPessoa(e.target.value);
        console.log(pessoa)
        if (e.target.value === PJ){
            setUsingCode(CNPJ)
        } else{
            setUsingCode(CPF)
        }
    };

    const handleAddUser = async () => {
        if (login === "" || password === "" || confirmPassword === "" || code === "" || email === ""){
            handleShowMessage("Por favor, preencha todos os Campos!", "Atenção", "OK", 'warning')
        } else if (usingCode === PF && !verifyCPF(code)) {
            handleShowMessage("CPF inválido", "Atenção", "OK", 'warning')
        } else if (usingCode === PJ && !verifyCNPJ(code)) {
            handleShowMessage("CNPJ inválido", "Atenção", "OK", 'warning')
        } else if (!strongRegex.test(password)) {
            handleShowMessage("Senha de segurança fraca, a senha deve conter: 1 letra maiúscula, 1 letra minúscula, 1 caractere especial, letras e numeros e pelo menos 8 caracteres", "Atenção", "OK", 'warning')
        } else {
            const loginExist = await _verifyUserByColumn(login, 'login')
            if (loginExist) {
                handleShowMessage("Usuário já existente", "Atenção", "OK", 'warning')
            } else {
                if (pessoa === PF) {
                    const cpfExist = await _verifyUserByColumn(code, 'cpf')
                    if (cpfExist) {
                        handleShowMessage("CPF já cadastrado", "Atenção", "OK", 'warning')
                    } else {
                        _addUser(login, email, code, password, PF).then(r =>{
                                if (r.status === 201){
                                    handleShowMessage("Usuário cadastrado com sucesso", "Sucesso", "OK", 'success')
                                } else{
                                    handleShowMessage("Algo deu errado, tente novamente", "Erro", "OK", 'danger')
                                }
                            }
                        )
                    }
                } else if (pessoa === PJ) {
                    const cnpjExist = await _verifyUserByColumn(code, 'cnpj')
                    if (cnpjExist) {
                        handleShowMessage("CNPJ já cadastrado", "Atenção", "OK", 'warning')
                    } else {
                        _addUser(login, email, code, password, PJ).then(r =>{
                            if (r.status === 201){
                                handleShowMessage("Usuário cadastrado com sucesso", "Sucesso", "OK", 'success')
                            } else{
                                handleShowMessage("Algo deu errado, tente novamente", "Erro", "OK", 'danger')
                            }
                        }
                        )
                    }
                }

            }
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
                                <Form.Control type="text" value={login} onChange={event => setLogin(event.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="password" label="Senha">
                                <Form.Control type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="password2" label="Confirme a Senha">
                                <Form.Control type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="email" label="E-mail">
                                <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="code" label={usingCode}>
                                <Form.Control type="text" value={code} onChange={event => setCode(event.target.value)}/>
                            </FloatingLabel>
                            <Button className="yellow-background border-0 blue-text fw-bold"
                                    size="lg"
                                    onClick={handleAddUser}>
                                    Cadastrar
                            </Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
            <AlertMessage
            title={alertTitle}
            message={alertMessage}
            butttonText={alertButton}
            variant={alertVariant}
            show={showMessage}
            handleClose={handleCloseMessage}
            />
        </Container>
    );
}

export default Register;
