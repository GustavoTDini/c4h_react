import {API, headers} from "./c4hAPI";
import {formatUserPF, formatUserPJ} from "../utilities/apiHelpers";
import {PF, PJ} from "../utilities/HelperFunctions";

export const _getAllUsers = async () =>
    fetch(`${API}/usuarios`, {
        headers,
        method: 'GET',
    }).then(res => res.json())

export const _addUser = async (login, email, codigo, senha, tipo ) => {
    let body = '';
    if (tipo === PF){
        body = JSON.stringify(formatUserPF(
            login,
            email,
            codigo,
            senha
        ))
    } else if (tipo === PJ){
        body = JSON.stringify(formatUserPJ(
            login,
            email,
            codigo,
            senha
        ))
    }
    console.log(body);
    return fetch(`${API}/usuarios`, {
        headers,
        method: 'POST',
        body: body
    })
}

export const _verifyUserByColumn = async (value, column) => {
    let result = await fetch(`${API}/usuarios?filter[${column}]=${value}`, {
        method: 'GET',
        headers,
    }).then(res=>res.json())
    return result.length !== 0;
}

export const _getUserById = async (id) => {
    return fetch(`${API}/usuarios/${id}`, {
        method: 'GET',
        headers,
    }).then(res=>res.json())
}




