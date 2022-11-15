import {API, headers} from "./c4hAPI";
import {formatUser, setBearerToken} from "../utilities/apiHelpers";

export const _register = async (login, email, codigo, senha, tipo ) => {
    return fetch(`${API}/api/register`, {
        headers,
        method: 'POST',
        body: JSON.stringify(formatUser(
            login,
            email,
            codigo,
            senha,
            tipo
        ))
    }).then(res => res.json())
}

export const _loginUser = async (login, senha ) => {
    return fetch(`${API}/api/login`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            {
                "login": login,
                "senha": senha,
            }
        )
    }).then(res => res.json())
}

export const _logoutUser = async (token) => {
    let headers = setBearerToken(token);
    return fetch(`${API}/api/logout`, {
        headers,
        withCredentials: true,
        credentials: 'include',
        method: 'GET',
    }).then(res => {
        let status = res.status
        let response = res.json()
        response.status = status;
        return response
    })
}
