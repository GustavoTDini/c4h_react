import {API} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllDonations = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/doacoes`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}

export const _getDonationsByMonth = async (token, mes, ano) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/doacoes/mes/${mes}&${ano}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _getDonationsByUser = async (token) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/doacoes/usuario`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}

export const _addDonation = async (token, valor) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/doacoes`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "valor": valor
            }
        )
    }).then(res => res.json())
}
