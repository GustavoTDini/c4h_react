import {Row} from "react-bootstrap";
import PeopleCarousel from "./PeopleCarousel";


const HomeColaboradoresBlock = () =>(
    <>
        <Row className="mt-5 mb-5">
            <p className="blue-text fw-bold h1">Nossos Colaboradores</p>
        </Row>
        <Row className="mt-5 mb-5">
            <PeopleCarousel/>
        </Row>
    </>
)

export default HomeColaboradoresBlock
