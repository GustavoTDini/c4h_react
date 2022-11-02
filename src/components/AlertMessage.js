import React, { useState } from 'react';
import {Col, Button, Alert, Modal} from "react-bootstrap";

function AlertMessage({variant, title, message, butttonText, show, handleClose}) {

    return (
        <Modal
            show={show}
            keyboard={true}
            centered>
            <Alert variant={variant} className="h-100 m-0">
                <Alert.Heading>{title}</Alert.Heading>
                <p>
                    {message}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={handleClose} variant="outline-success">
                        {butttonText}
                    </Button>
                </div>
            </Alert>
        </Modal>
    );
}

export default AlertMessage
