import {Col, Row} from "react-bootstrap";
import BlueTextBlock from "./BlueTextBlock";


const HomeDiferencaBlock = () => (
    <>
        <Row className="mt-5 mb-5 justify-content-between">
            <BlueTextBlock
                side={"text-end"}
                titulo={"Migrante"}
                texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit ac lorem quis semper. Proin rhoncus leo eu libero consectetur vulputate. Donec vitae leo ut mauris semper posuere. Phasellus quis dolor diam. Nullam et tempor dolor. Curabitur metus leo, eleifend eu tempor ac, volutpat sed ligula. Etiam pulvinar nisl ac."}
            />
            <BlueTextBlock
                side={"text-start"}
                titulo={"Refugiados"}
                texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit ac lorem quis semper. Proin rhoncus leo eu libero consectetur vulputate. Donec vitae leo ut mauris semper posuere. Phasellus quis dolor diam. Nullam et tempor dolor. Curabitur metus leo, eleifend eu tempor ac, volutpat sed ligula. Etiam pulvinar nisl ac."}
            />
        </Row>

    </>
)

export default HomeDiferencaBlock
