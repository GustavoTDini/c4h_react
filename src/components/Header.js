import {Button, ButtonGroup, Col, Container, Image, Navbar, Row} from "react-bootstrap";
import logoImage from "../res/logo.png"
import SocialMediaButtons from "./SocialMediaButtons";

function Header() {
    return(
        <Container fluid={"xl"} className="mb-5">
            <Navbar>
                <Row className="mb-2 mt-2 d-flex justify-content-end">
                    <Col md={{span: 2, offset: 10}} className="d-flex justify-content-end">
                        <SocialMediaButtons/>
                    </Col>
                </Row>
                <Row xs="auto">
                    <Col md={2}>
                        <div className="yellow-background rounded justify-content-between">
                            <Image alt="logo Image" src={logoImage} className="logo-image img-fluid d-block mx-auto" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <ButtonGroup className="d-lg-flex border-0 w-100 h-100">
                            <Button className="border-0 rounded bold-text blue-text"  variant={"outline-primary"} size="lg">Home</Button>
                            <Button className="border-0 rounded bold-text blue-text"  variant={"outline-primary"} size="lg">Sobre</Button>
                            <Button className="border-0 rounded bold-text blue-text"  variant={"outline-primary"} size="lg">Projetos</Button>
                            <Button className="border-0 rounded bold-text blue-text"  variant={"outline-primary"} size="lg">Blog</Button>
                            <Button className="border-0 rounded bold-text blue-text"  variant={"outline-primary"} size="lg">Relatórios</Button>
                        </ButtonGroup>

                    </Col>
                    <Col md={2}>
                        <Button className="h-100 w-100 yellow-background blue-text bold-text" size="lg" variant={"warning"}>Login</Button>
                    </Col>
                </Row>

            </Navbar>

        </Container>
    );
}

export default Header;
