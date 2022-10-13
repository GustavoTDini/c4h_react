import {Col, Image} from "react-bootstrap";
import file from "../../res/file-earmark-text.svg";


const HomeImageText = ({imagem, titulo, texto}) =>(
    <Col md={3}>
        <Image src={imagem} className="home-icons"/>
        <p className="light-blue-text h3">{titulo}</p>
        <p className="blue-text">{texto}</p>
    </Col>
)

export default HomeImageText;
