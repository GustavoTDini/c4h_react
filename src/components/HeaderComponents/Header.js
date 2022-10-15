import {Button, Col, Container, Form, Image, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import logoImage from "../../res/logo.png";
import menu from "../../res/menu.svg";
import SocialMediaButtons from "./SocialMediaButtons";
import {useState, useEffect} from "react";
import HeaderButtons from "./HeaderButtons";
import OffScreenButtons from "./OffScreenButtons";
import SocialMediaHeader from "./SocialMediaHeader";

function Header({user}) {

    const offCanvas = "offCanvas"

    return (
        <Container>
            <SocialMediaHeader/>
            <Navbar expand="lg" className="justify-content-between">
                <Container fluid>
                    <Navbar.Brand className="yellow-background rounded">
                        <Image alt="logo Image" src={logoImage} className="logo-image" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={offCanvas}/>

                    {/*<Navbar.Toggle className="border-0">*/}
                    {/*    <Button className="border-0 yellow-background" size="lg" onClick={handleShow}>*/}
                    {/*        <Image alt="menu icon" src={menu} />*/}
                    {/*    </Button>*/}
                    {/*</Navbar.Toggle>*/}
                    <Navbar.Offcanvas
                        id={offCanvas}
                        placement="end"
                        aria-labelledby={offCanvas}>
                        <Offcanvas.Header closeButton/>
                        <Offcanvas.Body>
                            <OffScreenButtons user={user}/>
                            <HeaderButtons user={user}/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </Container>
    );
}



export default Header;
