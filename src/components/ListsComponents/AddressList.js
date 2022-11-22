import React from 'react';
import {Container, ListGroup} from "react-bootstrap";

function AddressList({addresses}) {

    return (
        <Container className="list-scroll list-height">
            <ListGroup variant="flush">
                {addresses.fetched && addresses.list.map((address)=>(
                    <ListGroup.Item key={address.id} action>{showAddress(address)}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default AddressList
