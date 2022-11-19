import {Button, FloatingLabel, Form, Modal, Stack} from "react-bootstrap";


function AddSocialMedia({show, handleClose}){


    return(
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header>
                <Modal.Title>Adicionar Mídia Social</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={2}>
                    <FloatingLabel controlId="tipo" label="Tipo">
                        <Form.Control type="text" />
                    </FloatingLabel>
                    <FloatingLabel controlId="ddd" label="URL">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                </Stack>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Adicionar Telefone
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddSocialMedia
