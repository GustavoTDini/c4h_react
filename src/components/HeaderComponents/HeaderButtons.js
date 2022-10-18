import NavButton from "./NavButton";
import {Container, Stack} from "react-bootstrap";

function HeaderButtons({user}) {
    const className = "border-0 blue-text fw-bold"
    const buttonClass = className + " nav-button"
    const loginClassName = buttonClass + " yellow-background login-button"
    const yellowClassName = loginClassName + " doar-button"

    return (
            <Container className="justify-content-between d-md-none d-lg-flex d-sm-none d-none" fluid>
                <NavButton className ={buttonClass} label={"Home"} location={"/"} variant={"outline-primary"}/>
                <NavButton className ={buttonClass} label={"Sobre"} location={"/about"} variant={"outline-primary"}/>
                <NavButton className ={buttonClass} label={"Projetos"} location={"/projects"} variant={"outline-primary"}/>
                <NavButton className ={buttonClass} label={"Blog"} location={"/blogs"} variant={"outline-primary"}/>
                <NavButton className ={buttonClass} label={"Relatórios"} location={"/reports"} variant={"outline-primary"}/>
                {user?
                    <Stack direction={"vertical"} gap={2} className="profile-button-group">
                        <NavButton className={yellowClassName} label={"Perfil"} location={"/profile"}/>
                        <NavButton className={yellowClassName} label={"DOE AGORA"} location={"/donation"}/>
                    </Stack>:
                    <NavButton className={loginClassName} label={"Login"} location={"/login"}/>}
            </Container>
        )
}

export default HeaderButtons
