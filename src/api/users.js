import {API, headers} from "./c4hAPI";
import {formatUserPF, formatUserPJ} from "../utilities/apiHelpers";

export const _getAllUsers = async () =>
    fetch(`${API}/usuarios/verTodosUsuarios.php`, {
        method: 'GET',
        headers
    }).then(res => res.json())
        .then(res => res.users)

export const _addUserPF = async (login, email, cpf, senha ) => {
    return fetch(`${API}/usuarios/adicionarPF.php`, {
        method: 'POST',
        headers,
        body: JSON.stringify(formatUserPF(
            login,
            email,
            cpf,
            senha
        ))
    })
}

export const _addUserPJ = async (login, email, cnpj, senha ) => {
    return fetch(`${API}/usuarios/adicionarPF.php`, {
        method: 'POST',
        headers,
        body: JSON.stringify(formatUserPJ(
            login,
            email,
            cnpj,
            senha
        ))
    })
}

export const _verifyLogin = async (login) => {
    return fetch(`${API}/usuarios/verificarLogin.php`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            "login":login
        })
    }).then(res=>res.json())
}

export const _verifyCpf = async (cpf) => {
    return fetch(`${API}/usuarios/verificarCPF.php`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            "cpf":cpf
        })
    }).then(res=>res.json())
}

export const _verifyCnpj = async (cnpj) => {
    return fetch(`${API}/usuarios/verificarCNPJ.php`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            "cnpj":cnpj
        })
    }).then(res=>res.json())
}

export const _verifyPassword = async (login) => {
    return fetch(`${API}/usuarios/verificarCNPJ.php`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            "login":login
        })
    }).then(res=>res.json())
}




