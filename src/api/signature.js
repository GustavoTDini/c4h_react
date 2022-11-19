import {API} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllSignatures = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/doacoesMensais`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _getSignatureByUser = async (token) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/doacoesMensais_usuario`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _addSignature = async (token, valor, dia) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/doacoesMensais`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "valor": valor,
                "dia": dia,
            }
        )
    }).then(res => res.json())
}
