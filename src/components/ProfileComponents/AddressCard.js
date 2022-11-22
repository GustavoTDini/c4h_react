import {Button, Card, Container} from "react-bootstrap";
import * as React from "react";


function AddressCard({address}){

    if (address !== null){
        console.log(address)
        return(
            <Container className="card-size m-2">
                <Card className="card-size">
                    <Card.Header>
                        <Card.Title>
                            {address.nome}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{`${address.logradouro} nº${address.numero}, ${address.complemento}`}</Card.Text>
                        <Card.Text>{`CEP: ${address.cep} - ${address.bairro}`}</Card.Text>
                        <Card.Text>{`${address.cidade}, ${address.estado}`}</Card.Text>
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

}

export default AddressCard
