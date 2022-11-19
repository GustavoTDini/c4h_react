import {Col, Container, Form, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {ASSINATURA, realNotation} from "../../utilities/HelperFunctions";
import PaymentButton from "../ButtonsComponents/PaymentButton";

function Signature() {
    const [day, setDay] = useState(1)
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState('')

    const diasAssinatura = [1,7,14,21,28];

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
                                onChange={(e) => {
                                    setValue(e.target.value)
                                    setMessage(`Confirma a doação Mensal de ${realNotation.format(e.target.value)}, sempre no dia ${day}?`)
                                }}/>
                            <h3 className="blue-text text-center large-text">{realNotation.format(value)}</h3>
                            <Form.Label className="blue-text text-center fw-bold">Selecione o dia de pagamento da doação mensal</Form.Label>
                            <Form.Select value={day} onChange={e => setDay(e.target.value)}>
                                {diasAssinatura.map((dia) =>(
                                    <option value={dia} key={dia}>{dia}</option>
                                ))}
                            </Form.Select>
                            <PaymentButton
                            label={"Programar Doação Mensal"}
                            message={message}
                            tipo={ASSINATURA}
                            value={value}
                            day={day}
                            />
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signature;
