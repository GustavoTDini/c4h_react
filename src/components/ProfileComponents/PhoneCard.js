import {Button, Card, Container} from "react-bootstrap";
import * as React from "react";


function PhoneCard(){


    return(
        <Container className="card-size m-2">
            <Card className="card-size">
                <Card.Header>
                    <Card.Title>
                        Tipo de Telefone
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>DDD + numero</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Container className="d-flex justify-content-between">
                        <Button>Editar</Button>
                        <Button>Apagar</Button>
                    </Container>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default PhoneCard
