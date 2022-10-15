import {Button, Col, Container, Image, Navbar, Offcanvas} from "react-bootstrap";
import logoImage from "../../res/logo.png";
import menu from "../../res/menu.svg";
import SocialMediaButtons from "./SocialMediaButtons";
import {useState, useEffect} from "react";
import HeaderButtons from "./HeaderButtons";
import OffScreenButtons from "./OffScreenButtons";

function Header({user}) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Collapse>
                    <Col md={2}>
                        <h2>{user}</h2>
                    </Col>
                    <Col md={{span: 2, offset: 8}} className="d-flex justify-content-end">
                        <SocialMediaButtons/>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
            <Navbar expand="md" className="justify-content-between">
                <Navbar.Brand className="yellow-background rounded">
                    <Image alt="logo Image" src={logoImage} className="logo-image" />
                </Navbar.Brand>
                <HeaderButtons user={user}/>
                <Navbar.Toggle className="border-0">
                    <Button className="border-0 yellow-background" size="lg" onClick={handleShow}>
                        <Image alt="menu icon" src={menu} />
                    </Button>
                </Navbar.Toggle>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                <Offcanvas.Header closeButton/>
                <Offcanvas.Body>
                    <OffScreenButtons user={user}/>
                </Offcanvas.Body>
            </Offcanvas>
        </Container>

    );
}

export default Header;
