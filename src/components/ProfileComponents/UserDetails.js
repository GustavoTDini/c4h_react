import {Button, FloatingLabel, Form, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import ShowAddress from "./ShowAddress";
import ShowPhone from "./ShowPhone";
import UpdatePasswordButton from "./UpdatePasswordButton";
import {CPF, PF} from "../../utilities/HelperFunctions";
import ShowSocialMedia from "./ShowSocialMedia";


function UserDetails({admin, user}){
    const [code, setCode] = useState(CPF)
    const [pessoa, setPessoa] = useState(PF)

    useEffect(()=> {
        console.log(user)
    },[])

    return(
        <Stack gap={2}>
            <FloatingLabel controlId="login" label="Login">
                {user!== null && <Form.Control type="text" value={user.login}/>}
            </FloatingLabel>
            <FloatingLabel controlId="code" label={"code"}>
                {user!== null && <Form.Control type="text" disabled value={user.code}/>}
            </FloatingLabel>
            <FloatingLabel controlId="name" label="Nome">
                {user!== null && <Form.Control type="text" value={user.nome}/>}
            </FloatingLabel>
            <FloatingLabel controlId="email" label="E-mail">
                {user!== null && <Form.Control type="email" value={user.email}/>}
            </FloatingLabel>
            <FloatingLabel controlId="url" label="URL">
                <Form.Control type="text"/>
            </FloatingLabel>
            {/*{pessoa === PF?<FloatingLabel controlId="url" label="Date de Nascimento">*/}
            {/*    <Form.Control type="date"/>*/}
            {/*</FloatingLabel>:<div/>}*/}
            <ShowAddress/>
            <ShowPhone/>
            <ShowSocialMedia/>
            {admin &&
                <>
                    <Form.Check
                        type="switch"
                        id="switch-administrador"
                        label="Administrador"
                        size="lg"/>
                    <Form.Check
                        type="switch"
                        id="switch-colaborador"
                        label="Colaborador"
                        size="lg"/>
                    <Form.Check
                        type="switch"
                        id="switch-Voluntário"
                        label="Voluntário"
                        size="lg"/>
                    <Button className="w-100">Adicionar Foto de Colaborador</Button>
                </>
            }

            <Stack className="w-100" direction="horizontal" gap={2}>
                {admin?
                    <Button className="w-100" size="lg">Apagar</Button>:
                    <UpdatePasswordButton/>
                }
                <Button className="w-100" size="lg">Atualizar Dados</Button>
            </Stack>
        </Stack>
    )
}

export default UserDetails
