import NavButton from "./NavButton";
import {Navbar, Stack} from "react-bootstrap";

function HeaderButtons({user}) {
    const className = "border-0 blue-text fw-bold"
    const buttonClass = className + " nav-button"
    const loginClassName = buttonClass + " yellow-background login-button"
    const yellowClassName = className + " yellow-background doar-button"

    return (
        <Navbar.Collapse className="justify-content-between">
            <NavButton className ={buttonClass} label={"Home"} location={"/"} variant={"outline-primary"}/>
            <NavButton className ={buttonClass} label={"Sobre"} location={"/about"} variant={"outline-primary"}/>
            <NavButton className ={buttonClass} label={"Projetos"} location={"/projects"} variant={"outline-primary"}/>
            <NavButton className ={buttonClass} label={"Blog"} location={"/blog"} variant={"outline-primary"}/>
            <NavButton className ={buttonClass} label={"Relatórios"} location={"/reports"} variant={"outline-primary"}/>
            {user? <Stack direction={"vertical"} gap={2} className="mx-5">
                    <NavButton className={yellowClassName} label={"Perfil"} location={"/profile"}/>
                    <NavButton className={yellowClassName} label={"DOE AGORA"} location={"/donation"}/>
                </Stack>:
                <NavButton className={loginClassName} label={"Login"} location={"/login"}/>}
                </Navbar.Collapse>
        )
}

export default HeaderButtons
