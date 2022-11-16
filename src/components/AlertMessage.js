import React from 'react';
import {Alert, Button, Modal} from "react-bootstrap";

function AlertMessage({message, show, handleButton}) {

    return (
        <Modal
            show={show}
            keyboard={true}
            centered>
            <Alert variant={message.variant} className="h-100 m-0">
                <Alert.Heading>{message.title}</Alert.Heading>
                <p>
                    {message.message}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={handleButton} variant="outline-success" className="mx-2">
                        {message.buttonText}
                    </Button>
                </div>
            </Alert>
        </Modal>
    );
}

export default AlertMessage
