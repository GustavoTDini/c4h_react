import {Button, FloatingLabel, Form, Modal, Stack} from "react-bootstrap";


function ChangePassword({show, handleClose}){

    return(
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header>
                <Modal.Title>Atualizar Senha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack gap={2}>
                    <FloatingLabel controlId="senha" label="Senha Atual">
                        <Form.Control type="password" />
                    </FloatingLabel>
                    <FloatingLabel controlId="novaSenha" label="Nova Senha">
                        <Form.Control type="password"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="novaSenha2" label="Confirme a Nova Senha">
                        <Form.Control type="password"/>
                    </FloatingLabel>
                </Stack>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Trocar Senha
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangePassword
