import {Button, Card, Container, Image} from "react-bootstrap";
import * as React from "react";


function SocialMediaCard({socialMedia}){


    return(
        <Container className="card-size m-2">
            <Card className="card-size">
                <Card.Header>
                    <Container className="d-flex justify-content-between">
                        <Card.Title>
                            {socialMedia.id_rede}
                        </Card.Title>
                        <Image thumbnail src="https://placekitten.com/g/50/50"/>
                    </Container>
                </Card.Header>
                <Card.Body>
                    <Card.Text><a href={socialMedia.url}>{socialMedia.url}</a></Card.Text>
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
