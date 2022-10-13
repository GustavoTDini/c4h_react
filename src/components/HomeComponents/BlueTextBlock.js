import {Col} from "react-bootstrap";


const BlueTextBlock = ({side, titulo, texto}) => (
    <Col md="6">
        <div className={"mr-4 blue-background p-4 " + side}>
            <p className="yellow-text fw-bold h3">{titulo}</p>
            <p className="text-white">{texto}</p>
        </div>
    </Col>
)

export default BlueTextBlock
