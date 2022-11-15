import React from 'react';
import {Alert, Button, Modal} from "react-bootstrap";

function ConfirmMessage({message, show, handleConfirm, handleCancel}) {

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
                    <Button onClick={handleConfirm} variant="outline-success" className="mx-2">
                        Confirmar
                    </Button>
                    <Button onClick={handleCancel} variant="outline-success" className="mx-2">
                        Cancelar
                    </Button>
                </div>
            </Alert>
        </Modal>
    );
}

export default ConfirmMessage
