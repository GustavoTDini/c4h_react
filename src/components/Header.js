import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Image,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
    Row,
    Stack
} from "react-bootstrap";
import logoImage from "../res/logo.png";
import menu from "../res/menu.svg";
import SocialMediaButtons from "./SocialMediaButtons";
import {useState} from "react";
import {useNavigate} from "react-router";

function Header() {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClickAbout = () => {
        navigate("/about");
    }

    const handleClickHome = () => {
        navigate("/");
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Collapse>
                    <Col md={{span: 2, offset: 10}} className="d-flex justify-content-end">
                        <SocialMediaButtons/>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
            <Navbar expand="md" className="justify-content-between">
                <Navbar.Brand className="yellow-background rounded">
                    <Image alt="logo Image" src={logoImage} className="logo-image" />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-between">
                        <Button className="border-0 blue-text fw-bold nav-button"  variant={"outline-primary"} size="lg" onClick={handleClickHome}>Home</Button>
                        <Button className="border-0 blue-text fw-bold nav-button"  variant={"outline-primary"} size="lg" onClick={handleClickAbout}>Sobre</Button>
                        <Button className="border-0 blue-text fw-bold nav-button"  variant={"outline-primary"} size="lg">Projetos</Button>
                        <Button className="border-0 blue-text fw-bold nav-button"  variant={"outline-primary"} size="lg">Blog</Button>
                        <Button className="border-0 blue-text fw-bold nav-button"  variant={"outline-primary"} size="lg">Relatórios</Button>
                        <Button className="border-0 yellow-background blue-text fw-bold nav-button login-button" size="lg">Login</Button>
                </Navbar.Collapse>
                <Navbar.Toggle className="border-0">
                    <Button className="border-0 yellow-background" size="lg" onClick={handleShow}>
                        <Image alt="menu icon" src={menu} />
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                        <Offcanvas.Header closeButton/>
                        <Offcanvas.Body>
                            <Stack direction="vertical" className="d-flex justify-content-center">
                                <Button className="border-0 blue-text fw-bold"  variant={"outline-primary"} >Home</Button>
                                <Button className="border-0 blue-text fw-bold"  variant={"outline-primary"} >Sobre</Button>
                                <Button className="border-0 blue-text fw-bold"  variant={"outline-primary"} >Projetos</Button>
                                <Button className="border-0 blue-text fw-bold"  variant={"outline-primary"} >Blog</Button>
                                <Button className="border-0 blue-text fw-bold"  variant={"outline-primary"} >Relatórios</Button>
                                <Button className="border-0 yellow-background blue-text fw-bold" size="lg">Login</Button>
                            </Stack>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar.Toggle>

            </Navbar>

        </Container>

    );
}

export default Header;
