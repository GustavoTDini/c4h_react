import {API} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllAddresses = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _getAddressesByUser = async (token) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco_usuario`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _getAddressesByUserId = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco_usuario/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _addAddress = async (token, valor) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "valor": valor
            }
        )
    }).then(res => res.json())
}
