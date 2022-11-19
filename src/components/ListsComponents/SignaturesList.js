import React from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {showSignatures} from "../../utilities/HelperFunctions";

function SignaturesList({signatures}) {

    return (
        <Container className="list-scroll h-auto">
            <ListGroup variant="flush">
                {signatures.fetched && signatures.list.map((signature)=>(
                    <ListGroup.Item key={signature.id} action>{showSignatures(signature)}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default SignaturesList
