import {Col, Container, Form, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {DOACAO, realNotation} from "../../utilities/HelperFunctions";
import NavigateButton from "../ButtonsComponents/NavigateButton";
import PaymentButton from "../ButtonsComponents/PaymentButton";

function Donation() {
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState('')

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
                                onChange={(e) => {
                                    setValue(e.target.value)
                                    setMessage(`Confirma a doação de ${realNotation.format(e.target.value)} ?`)
                                }}/>
                            <h3 className="blue-text text-center large-text">{realNotation.format(value)}</h3>
                            <PaymentButton
                            label={"Fazer Doação"}
                            message={message}
                            tipo={DOACAO}
                            value={value}
                            />
                            <NavigateButton
                                label={"Fazer Doação Mensal"}
                                navigateTo={"/signature"}/>
                        </Stack>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
}

export default Donation;
