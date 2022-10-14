import {Container, Image, Row} from "react-bootstrap";
import construcao from "../res/emConstrucao.png"

const Construction = () =>  (
    < Container className="mt-5 justify-content-between">
        <h1 className="text-center blue-text fw-bolder">Ooops, página ainda em construção</h1>
            <Row>
                <Image className="m-auto large_image" alt="Imagem Construção" src={construcao} fluid="lg"/>
            </Row>
        <h2 className="text-center blue-text fw-bold">Volte logo para mais novidades</h2>
    </Container>
)

export default Construction
