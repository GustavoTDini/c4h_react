import NavButton from "./NavButton";
import {Stack} from "react-bootstrap";

function OffScreenButtons({user}) {

    const className = "border-0 blue-text fw-bold"
    const loginClassName = className + " yellow-background"

    return (
        <Stack direction="vertical" className="justify-content-center d-md-flex d-lg-none" gap={2}>
            <NavButton className ={className} label={"Home"} location={"/"} variant={"outline-primary"}/>
            <NavButton className ={className} label={"Sobre"} location={"/about"} variant={"outline-primary"}/>
            <NavButton className ={className} label={"Projetos"} location={"/projects"} variant={"outline-primary"}/>
            <NavButton className ={className} label={"Blog"} location={"/blogs"} variant={"outline-primary"}/>
            <NavButton className ={className} label={"Relatórios"} location={"/reports"} variant={"outline-primary"}/>
            {user? <Stack direction={"vertical"} gap={2} className="d-flex justify-content-center">
                    <NavButton className={loginClassName} label={"Perfil"} location={"/profile"}/>
                    <NavButton className={loginClassName} label={"DOE AGORA"} location={"/donation"}/>
                </Stack>:
                <NavButton className={loginClassName} label={"Login"} location={"/login"}/>}
        </Stack>
    )
}

export default OffScreenButtons
