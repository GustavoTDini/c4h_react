import {Container, Image, Navbar, Offcanvas} from "react-bootstrap";
import logoImage from "../../res/logo.png";
import HeaderButtons from "./HeaderButtons";
import OffScreenButtons from "./OffScreenButtons";
import SocialMediaHeader from "./SocialMediaHeader";
import {useEffect, useState} from "react";
import {tokenKey} from "../../utilities/apiHelpers";

function Header() {
    const offCanvas = "offCanvas"
    const [user, setUser] = useState(false);

    useEffect(()=>{
        setUser(localStorage.getItem(tokenKey)!== null)
    },[])

    return (
        <Container>
            <SocialMediaHeader/>
            <Navbar expand="lg" className="justify-content-between">
                <Container fluid>
                    <Navbar.Brand className="yellow-background rounded">
                        <Image alt="logo Image" src={logoImage} className="logo-image" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={offCanvas}/>
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
