import {Button, Col, Row} from "react-bootstrap";


const HomeVoluntariosBlock = () =>(
    <Row className="mt-5 mb-5">
        <Col md="6">
            <p className="large-text light-blue-text">VAMOS PRECISAR DE TODO MUNDO</p>
        </Col>
        <Col md="6">
            <p className="blue-text content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a mi vitae nisi elementum cursus. Duis sed tellus felis. Duis consequat faucibus elit. Sed maximus scelerisque eleifend. Vestibulum porta sem.</p>
            <div className="w-100 d-flex align-content-center">
                <Button className="btn-lg yellow-background blue-text w-75 h-25 border-0 m-auto fw-bold">Seja um Voluntário</Button>
            </div>
        </Col>
    </Row>
)

export default HomeVoluntariosBlock
