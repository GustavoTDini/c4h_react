import React from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {showUsers} from "../../utilities/HelperFunctions";

function UsersList({users}) {

    return (
        <Container className="list-scroll list-height-large">
            <ListGroup variant="flush">
                {users.fetched && users.list.map((user)=>(
                    <ListGroup.Item key={user.id} action>{showUsers(user)}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default UsersList
