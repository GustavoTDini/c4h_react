import {Col} from "react-bootstrap";


function LightBlueTextBlock({titulo, texto}) {
    return(
        <Col md ={6}>
            <p className="light-blue-text h2">{titulo}</p>
            <p className="blue-text  content-text">{texto}</p>
        </Col>
    );
}

export default LightBlueTextBlock;
