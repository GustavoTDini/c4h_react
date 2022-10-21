import {Button, FloatingLabel, Form, Modal, Stack} from "react-bootstrap";


function AddAddress({show, handleClose}){

    return(
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header>
                <Modal.Title>Adicionar Endereço</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={2}>
                    <FloatingLabel controlId="tipo" label="Tipo">
                        <Form.Control type="text" />
                    </FloatingLabel>
                    <FloatingLabel controlId="logradouro" label="Logradouro">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="numero" label="Número">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="complemento" label="Complemento">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="cep" label="CEP">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="bairro" label="Bairro">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="cidade" label="Cidade">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="estado" label="Estado">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="pais" label="País">
                        <Form.Control type="text"/>
                    </FloatingLabel>
                </Stack>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Adicionar Endereço
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddAddress
