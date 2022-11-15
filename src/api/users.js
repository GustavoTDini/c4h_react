import {API, headers} from "./c4hAPI";
import {setBearerToken} from "../utilities/apiHelpers";

export const _getAllUsers = async (token) =>{
    let headers = setBearerToken(token);
    return fetch(`${API}/api/usuario`, {
        headers,
        method: 'GET',
    }).then(res => res.json())
}


export const _verifyUserByColumn = async (value, column) => {
    return await fetch(`${API}/api/usuario/${column}/${value}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
        .then(res => res.message);
}

export const _getUserById = async (id) => {
    return fetch(`${API}/api/usuario/${id}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
        .then(res => res.message);
}




