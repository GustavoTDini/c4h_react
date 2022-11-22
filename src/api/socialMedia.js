import {API} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllSocialMedia = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/rede`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _getSocialMediaByUserId = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/rede_usuario/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _addSocialMedia = async (token, valor) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/rede`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "valor": valor
            }
        )
    }).then(res => res.json())
}
