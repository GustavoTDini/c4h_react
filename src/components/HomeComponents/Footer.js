import {Col, Container, Row} from "react-bootstrap";
import SocialMediaButtons from "../SocialMediaButtons";

const Footer = ()  => (
    <Row className="p-5 mt-5 light-grey-background">
        <Col md={5}>
            <p className="blue-text h6">CNPJ:25.224.617/0001-11/</p>
            <p className="blue-text h6">Fone e Whatsapp: +55 11 3105-7254 / 9 6737-8710</p>
            <p className="blue-text h6">Email: contato@africadocoração.org</p>
        </Col>
        <Col md={5}>
            <p className="blue-text h6">Rua Silveira Martins 115, sala14</p>
            <p className="blue-text h6">Centro - São Paulo/SP-Brasil</p>
        </Col>
        <Col md={2}>
            <SocialMediaButtons/>
        </Col>
    </Row>
)

export default Footer;
