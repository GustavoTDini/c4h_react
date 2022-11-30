import {Button, FloatingLabel, Form, Spinner, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import ShowAddress from "./ShowAddress";
import ShowPhone from "./ShowPhone";
import UpdatePasswordButton from "./UpdatePasswordButton";
import {CNPJ, CPF, NOME, PF, PJ, RAZAO_SOCIAL} from "../../utilities/HelperFunctions";
import ShowSocialMedia from "./ShowSocialMedia";
import UpdateUserButton from "../ButtonsComponents/UpdateUserButton";


function UserDetails({adminView, user}){
    const [code, setCode] = useState(CPF)
    const [tipoNome, setTipoNome] = useState("")
    const [pessoa, setPessoa] = useState(PF)
    const [changed, setChanged] = useState(false)
    const [login, setLogin] = useState("")
    const [cpf, setCpf] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [razaoSocial, setRazaoSocial] = useState("")
    const [url, setUrl] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [admin, setAdmin] = useState()
    const [voluntario, setVoluntario] = useState()
    const [colaborador, setColaborador] = useState()
    const [doador, setDoador] = useState()
    const [assinante, setAssinante] = useState()

    useEffect(()=> {
        if (user !== null){
            if (user.cpf === null){
                setCode(CNPJ)
                setPessoa(PJ)
                setTipoNome(RAZAO_SOCIAL)
                setCnpj(user.cnpj)
                setRazaoSocial(user.razao_social)
                setCpf(null)
                setNome(null)
                setDataNascimento(null)
            } else if (user.cnpj === null){
                setCode(CPF)
                setPessoa(PF)
                setTipoNome(NOME)
                setCpf(user.cpf)
                setNome(user.nome)
                if(user.dt_nascimento !== null){
                    setDataNascimento(user.dt_nascimento.slice(0,10))
                } else{
                    setDataNascimento(null)
                }
                setCnpj(null)
                setRazaoSocial(null)
            }
            setLogin(user.login)
            setUrl(user.url)
            setAdmin(user.admin)
            setEmail(user.email)
            setVoluntario(user.voluntario)
            setColaborador(user.colaborador)
            setDoador(user.doador)
            setAssinante(user.assinante)
            setChanged(false)
        }

    },[user])

    return(
        <Stack gap={2}>
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <FloatingLabel controlId="login" label="Login">
                    <Form.Control type="text" value={login} onChange={event => {
                        setLogin(event.target.value)
                        setChanged(true)
                    }}/>
                </FloatingLabel>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <FloatingLabel controlId="code" label={code}>
                    {pessoa === PF?
                    <Form.Control type="text" disabled value={cpf}/>:
                        <Form.Control type="text" disabled value={cnpj}/>}
                </FloatingLabel>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <FloatingLabel controlId="name" label={tipoNome}>
                    {pessoa === PF?
                        <Form.Control type="text" value={nome} onChange={event => {
                            setNome(event.target.value)
                            setChanged(true)
                        }}/>:
                        <Form.Control type="text" value={razaoSocial} onChange={event => {
                            setRazaoSocial(event.target.value)
                            setChanged(true)
                        }}/>}
                </FloatingLabel>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <FloatingLabel controlId="email" label="E-mail">
                    <Form.Control type="email" value={email} onChange={event => {
                        setEmail(event.target.value)
                        setChanged(true)
                    }}/>
                </FloatingLabel>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <FloatingLabel controlId="url" label="URL">
                    <Form.Control type="text" value={url} onChange={event => {
                        setUrl(event.target.value)
                        setChanged(true)
                    }}/>
                </FloatingLabel>}
            {pessoa === PF?
                user=== null?
                    !adminView && <Spinner animation="grow" variant="info"/>:
                    <FloatingLabel controlId="url" label="data_nascimento">
                        <Form.Control type="date" value={dataNascimento} onChange={event => {
                            setDataNascimento(event.target.value)
                            setChanged(true)
                        }}/>
                    </FloatingLabel>:<div></div>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <ShowAddress userId={user.id}/>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <ShowPhone userId={user.id}/>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <ShowSocialMedia userId={user.id}/>}
            {user=== null?
                !adminView && <Spinner animation="grow" variant="info"/>:
                <Stack className="w-100 p-3 d-flex justify-content-start" direction="vertical" gap={4}>
                    <Stack className="w-100 d-flex justify-content-between h-100" direction="horizontal" gap={5}>
                        <Form.Check
                            className="switch-size h-100"
                            type="switch"
                            id="switch-voluntario"
                            label="Voluntário"
                            disabled={adminView}
                            onClick={()=> {
                                setVoluntario(!voluntario)
                                setChanged(true)
                            }}
                            checked={voluntario}/>
                        {(!adminView && voluntario)?
                            <h2 className="text-center">Beleza, bora ajudar!</h2>:
                        <h2></h2>}
                    </Stack>
                {adminView &&
                        <Form.Check
                            className="switch-size"
                            type="switch"
                            id="switch-admin"
                            label="Administrador"
                            onClick={()=> {
                                setAdmin(!admin)
                                setChanged(true)
                            }}
                            checked={admin}/>}
                    {adminView &&
                        <Form.Check
                            className="switch-size"
                            type="switch"
                            id="switch-doador"
                            label="Doador"
                            disabled
                            onClick={()=> {
                                setDoador(!doador)
                                setChanged(true)
                            }}
                            checked={doador}/>}
                    {adminView &&
                        <Form.Check
                            className="switch-size"
                            type="switch"
                            id="switch-assinante"
                            label="Assinante"
                            disabled
                            checked={assinante}/>}
                    {adminView &&
                        <Form.Check
                            className="switch-size"
                            type="switch"
                            id="switch-colaborador"
                            label="Colaborador"
                            onClick={()=> {
                                setColaborador(!colaborador)
                                setChanged(true)
                            }}
                            checked={colaborador}/>}
                        {(colaborador && adminView)?
                            <Button className="w-100">Adicionar Foto de Colaborador</Button>:
                            <div></div>
                        }
                    </Stack>}
            {user !== null &&
                <Stack className="w-100" direction="horizontal" gap={2}>
                    {adminView?
                        <Button className="w-100" size="lg">Apagar</Button>:
                        <UpdatePasswordButton/>
                    }
                    <UpdateUserButton
                        id = {user.id}
                        login = {login}
                        cpf = {cpf}
                        nome = {nome}
                        email = {email}
                        cnpj = {cnpj}
                        razaoSocial = {razaoSocial}
                        url = {url}
                        dataNascimento = {dataNascimento}
                        admin = {admin}
                        voluntario = {voluntario}
                        colaborador = {colaborador}
                        foto ={null}
                        changed = {changed}
                    />
                </Stack>}
        </Stack>
    )
}

export default UserDetails
