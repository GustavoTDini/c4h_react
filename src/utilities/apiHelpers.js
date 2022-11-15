// format user as PF for the add API
import {PF} from "./HelperFunctions";
import {headers} from "../api/c4hAPI";

export const tokenKey = 'pdmig_token'
export const loggedKey = 'isLogged'

export function setBearerToken(token){
    headers.Authorization = "Bearer " + token
    return headers;
}

export function formatUser(login, email, codigo, senha, tipo) {
    let cpf = null;
    let cnpj = null;
    if (tipo === PF){
        cpf = codigo;
    } else {
        cnpj = codigo;
    }
    return {
        "login": login,
        "email": email,
        "cpf": cpf,
        "cnpj": cnpj,
        "senha": senha,
    }
}
