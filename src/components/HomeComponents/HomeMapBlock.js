import MapWrapper from "./MapWrapper";
import {Container, Row} from "react-bootstrap";


const HomeMapBlock = () => (
    <Row className="mt-5 mb-5">
        <p className="blue-text fw-bolder h1">Onde estamos</p>
        <Container className="light-grey-background map-container">
            <MapWrapper/>
        </Container>
    </Row>
)

export default HomeMapBlock;
