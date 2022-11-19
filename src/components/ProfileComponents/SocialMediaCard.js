import {Button, Card, Container, Image} from "react-bootstrap";
import * as React from "react";


function SocialMediaCard(){


    return(
        <Container className="card-size m-2">
            <Card className="card-size">
                <Card.Header>
                    <Container className="d-flex justify-content-between">
                        <Card.Title>
                            Tipo de Midia Social
                        </Card.Title>
                        <Image thumbnail src="https://placekitten.com/g/50/50"/>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Card.Text>URL da Midia com link</Card.Text>
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

export default SocialMediaCard
