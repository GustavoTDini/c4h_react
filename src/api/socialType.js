import {API} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllSocialMediaTypes = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/rede_tipo`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _getSocialMediaTypeById = async (token, id) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/rede_tipo/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _addSocialMediaType = async (token, valor) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/rede_tipo`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "valor": valor
            }
        )
    }).then(res => res.json())
}
