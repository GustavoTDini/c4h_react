import {Button, Card, Container} from "react-bootstrap";
import * as React from "react";


function AddressCard(){


    return(
        <Container className="card-size m-2">
            <Card className="card-size">
                <Card.Header>
                    <Card.Title>
                        Tipo de Endereço
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>Logradouro + numero + complemento</Card.Text>
                    <Card.Text>CEP + Cidade e estado</Card.Text>
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

export default AddressCard
