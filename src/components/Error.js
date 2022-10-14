import {Container, Image, Row} from "react-bootstrap";
import lostWorld from "../res/lostWorld.png"

const Error = () =>  (
    < Container className="mt-5 justify-content-between">
        <h1 className="text-center blue-text fw-bolder">Erro 404</h1>
        <h2 className="text-center blue-text fw-bold">Não encontramos a página solicitada</h2>
        <Row>
            <Image className="m-auto large_image" alt="Imagem Construção" src={lostWorld} fluid="md"/>
        </Row>
        <h2 className="text-center blue-text fw-bold">Mas ela deve estar por aí em algum lugar</h2>
    </Container>
)

export default Error
