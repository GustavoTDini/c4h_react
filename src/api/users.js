import {API, headers} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllUsers = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/usuario`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _verifyUserByColumn = async (value, column) => {
    return await fetch(`${API}/api/usuario/${column}/${value}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
        .then(res => res.message);
}

export const _getUserById = async (id, token) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/usuario/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
        .then(res => res.message);
}

export const _getCurrentLoggedUser = async (token) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/usuario_logged`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
        .then(res => res.message);
}

export const _updateUser = async (token, id, login, cpf, nome, email, cnpj, razaoSocial, url, dataNascimento, admin, voluntario, colaborador, assinante, foto) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/usuario/${id}`, {
        method: 'PATCH',
        headers,
        body:JSON.stringify(
            {
                "login": login,
                "cpf": cpf,
                "nome": nome,
                "cnpj": cnpj,
                "razao_social": razaoSocial,
                "url": url,
                "dt_nascimento": dataNascimento,
                "admin": admin,
                "voluntario": voluntario,
                "colaborador": colaborador,
                "foto": foto
            }
        )
    }).then(res => res.json())
}


