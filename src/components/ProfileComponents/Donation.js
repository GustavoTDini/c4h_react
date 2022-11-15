import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router";
import {realNotation} from "../../utilities/HelperFunctions";

function Donation({handleSetUser}) {
    const [value, setValue] = useState(0)

    const navigate = useNavigate();
    const handleClickSignature = () => {
        navigate("/signature")
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
                            <Button>Fazer Doação</Button>
                            <Button onClick={event => handleClickSignature()}>Fazer Assinatura</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Donation;
