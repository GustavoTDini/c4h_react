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

export const _addPhone = async (token, valor) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/telefone`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "valor": valor
            }
        )
    }).then(res => res.json())
}
