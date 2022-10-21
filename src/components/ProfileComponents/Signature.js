import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import {useState} from "react";

function Signature() {
    const [day, setDay] = useState(0)
    const [value, setValue] = useState(0)

    let formatter = Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL"
    })
    const dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    return(
        < Container className="mt-5">
            <Row className="mt-5 justify-content-around">
                <Col md={6}>
                    <Form className="mt-5 px-5">
                        <Stack direction="vertical" gap={4}>
                            <h1 className="light-blue-text fw-bold text-center">Selecione o Valor da sua Assinatura</h1>
                            <Form.Range
                                min="0"
                                max="100"
                                value={value}
                                step={0.25}
                                onChange={(e) => setValue(e.target.value)}/>
                            <h3 className="blue-text text-center large-text">{formatter.format(value)}</h3>
                            {(day >= 28)? <p className="blue-text text-center">Caso o dia selecionado for maior que os dias do mês, a doação será feita no último dia do mês!</p>:<p/>}

                            <Form.Label className="blue-text text-center fw-bold">Selecione o dia de pagamento da doação mensal</Form.Label>
                            <Form.Select value={day} onChange={e => setDay(e.target.value)}>
                                {dias.map((dia) =>(
                                    <option value={dia} key={dia}>{dia}</option>
                                ))}
                            </Form.Select>
                            <Button>Fazer Assinatura</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signature;
