import {API} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllPhones = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/telefone`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _getPhonesByUserId = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/telefone_usuario/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _getPhoneById = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/telefone/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _addPhone = async (token, tipo, ddd, numero, userId) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/telefone`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "nome": tipo,
                "ddd": ddd,
                "numero": numero,
                "userId":userId
            }
        )
    }).then(res => res.json())
}

export const _updatePhone = async (token, tipo, ddd, numero, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/telefone/${id}`, {
        headers,
        method: 'PATCH',
        body: JSON.stringify(
            {
                "nome": tipo,
                "ddd": ddd,
                "numero": numero
            }
        )
    }).then(res => res.json())
}

export const _deletePhone = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/telefone/${id}`, {
        method: 'DELETE',
        headers,
    }).then(res => res.json())
}
