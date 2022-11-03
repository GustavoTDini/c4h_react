import {v4} from 'uuid';
import {getNowDate} from "./HelperFunctions";

// format user as PF for the add API
export function formatUserPF(login, email, cpf, senha) {
    return {
        "id_usuario": v4(),
        "nm_login": login,
        "nm_email": email,
        "vl_cpf": cpf,
        "vl_senha": senha,
        "dt_criacao": getNowDate()
    }
}

export function formatUserPJ(login, email, cnpj, senha) {
    return {
        "id_usuario": v4(),
        "nm_login": login,
        "nm_email": email,
        "vl_cnpj": cnpj,
        "vl_senha": senha,
        "dt_criacao": getNowDate()
    }
}
