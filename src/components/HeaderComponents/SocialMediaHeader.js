import SocialMediaButtons from "./SocialMediaButtons";
import {Col, Navbar} from "react-bootstrap";

function SocialMediaHeader() {
    return (
        <Navbar expand="lg">
            <Navbar.Collapse className="justify-content-end">
                <Col md="2" className="justify-content-end d-flex">
                    <SocialMediaButtons/>
                </Col>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SocialMediaHeader
