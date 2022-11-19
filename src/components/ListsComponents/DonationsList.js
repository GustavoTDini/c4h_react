import React from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {showDonations} from "../../utilities/HelperFunctions";

function DonationsList({donations}) {

    return (
        <Container className="list-scroll list-height">
            <ListGroup variant="flush">
                {donations.fetched && donations.list.map((donation)=>(
                    <ListGroup.Item key={donation.id} action>{showDonations(donation)}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default DonationsList
