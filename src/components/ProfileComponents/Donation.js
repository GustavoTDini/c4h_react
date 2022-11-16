import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {useNavigate} from "react-router";
import {realNotation} from "../../utilities/HelperFunctions";
import ConfirmMessage from "../ConfirmMessage";
import AlertMessage from "../AlertMessage";
import {_addDonation} from "../../api/donations";
import {tokenKey} from "../../utilities/apiHelpers";

function Donation({handleSetUser}) {
    const [value, setValue] = useState(0)
    const [showConfirmDonation, setShowConfirmDonation] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const navigate = useNavigate();
    const handleClickSignature = () => {
        navigate("/signature")
    }

    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage({
            message: message,
            variant: variant,
            title: title,
            buttonText: button,
        })
        setShowMessage(true);
    }

    const handleConfirmDonation = async () => {
        if (value > 0){
            setShowConfirmDonation(true)
        } else{
            handleShowMessage("Por Favor insira um valor maior que zero!", "Ops", "Tente novamente", "warning")
        }
    }

    const handleAddDonation = async () => {
        await _addDonation(localStorage.getItem(tokenKey), value)
        setShowConfirmDonation(false)
        handleShowMessage("Usuário encaminhado para Sistema de pagamento", "Obrigado", "Retornar", "success")
    }

    return(
        < Container className="mt-5">
            <Row className="mt-5 justify-content-around">
                <Col md={6}>
                    <Form className="mt-5 px-5">
                        <Stack direction="vertical" gap={5}>
                            <h1 className="light-blue-text fw-bold text-center">Selecione o Valor da sua Doação</h1>
                            <Form.Range
                                min="0"
                                max="100"
                                value={value}
                                step={0.25}
                                onChange={(e) => setValue(e.target.value)}/>
                            <h3 className="blue-text text-center large-text">{realNotation.format(value)}</h3>
                            <Button onClick={event => handleConfirmDonation()}>Fazer Doação</Button>
                            <Button onClick={event => handleClickSignature()}>Fazer Doação Mensal</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
            <ConfirmMessage
                message={{
                    message: `Confirma a doação de ${realNotation.format(value)} ?`,
                    variant: "success",
                    title: "Confirme",
                }}
                show={showConfirmDonation}
                handleCancel={()=>setShowConfirmDonation(false)}
                handleConfirm={()=>handleAddDonation()}
            />
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={()=>setShowMessage(false)}
            />
        </Container>
    );
}

export default Donation;
