import {API} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllAddresses = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _getAddressesByUserId = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco_usuario/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _getAddressById = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _addAddress = async (token, tipo, logradouro, numero, cep, complemento, bairro, cidade, estado, pais, userId) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "tipo": tipo,
                "logradouro": logradouro,
                "numero": numero,
                "cep": cep,
                "complemento": complemento,
                "bairro": bairro,
                "cidade": cidade,
                "estado": estado,
                "pais": pais,
                "userId": userId,
            }
        )
    }).then(res => res.json())
}

export const _updateAddress = async (token, tipo, logradouro, numero, cep, complemento, bairro, cidade, estado, pais, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco/${id}`, {
        headers,
        method: 'PATCH',
        body: JSON.stringify(
            {
                "tipo": tipo,
                "logradouro": logradouro,
                "numero": numero,
                "cep": cep,
                "complemento": complemento,
                "bairro": bairro,
                "cidade": cidade,
                "estado": estado,
                "pais": pais,
            }
        )
    }).then(res => res.json())
}

export const _deleteAddress = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/endereco/${id}`, {
        method: 'DELETE',
        headers,
    }).then(res => res.json())
}
