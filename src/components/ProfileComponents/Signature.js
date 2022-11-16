import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {realNotation} from "../../utilities/HelperFunctions";
import {_addSignature} from "../../api/signature";
import {tokenKey} from "../../utilities/apiHelpers";
import ConfirmMessage from "../ConfirmMessage";
import AlertMessage from "../AlertMessage";

function Signature() {
    const [day, setDay] = useState(1)
    const [value, setValue] = useState(0)
    const [showConfirmDonation, setShowConfirmDonation] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const diasAssinatura = [1,7,14,21,28];

    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage({
            message: message,
            variant: variant,
            title: title,
            buttonText: button,
        })
        setShowMessage(true);
    }

    const handleConfirmSignature = async () => {
        if (value > 0){
            setShowConfirmDonation(true)
        } else{
            handleShowMessage("Por Favor insira um valor maior que zero!", "Ops", "Tente novamente", "warning")
        }
    }

    const handleAddSignature = async () => {
        await _addSignature(localStorage.getItem(tokenKey), value, day)
        setShowConfirmDonation(false)
        handleShowMessage("Usuário encaminhado para Sistema de pagamento", "Obrigado", "Retornar", "success")
    }

    return(
        < Container className="mt-5">
            <Row className="mt-5 justify-content-around">
                <Col md={6}>
                    <Form className="mt-5 px-5">
                        <Stack direction="vertical" gap={4}>
                            <h1 className="light-blue-text fw-bold text-center">Selecione o Valor da sua Doação Mensal</h1>
                            <Form.Range
                                min="0"
                                max="100"
                                value={value}
                                step={0.25}
                                onChange={(e) => setValue(e.target.value)}/>
                            <h3 className="blue-text text-center large-text">{realNotation.format(value)}</h3>
                            <Form.Label className="blue-text text-center fw-bold">Selecione o dia de pagamento da doação mensal</Form.Label>
                            <Form.Select value={day} onChange={e => setDay(e.target.value)}>
                                {diasAssinatura.map((dia) =>(
                                    <option value={dia} key={dia}>{dia}</option>
                                ))}
                            </Form.Select>
                            <Button onClick={event => handleConfirmSignature()}>Programar Doação Mensal</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
            <ConfirmMessage
                message={{
                    message: `Confirma a doação Mensal de ${realNotation.format(value)}, sempre no dia ${day}?`,
                    variant: "success",
                    title: "Confirme",
                }}
                show={showConfirmDonation}
                handleCancel={()=>setShowConfirmDonation(false)}
                handleConfirm={()=>handleAddSignature()}
            />
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={()=>setShowMessage(false)}
            />
        </Container>
    );
}

export default Signature;
