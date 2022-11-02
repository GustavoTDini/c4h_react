import {hashpassword} from './auth'

// format user as PF for the add API
export function formatUserPF(login, email, cpf, senha) {
    return {
        "login": login,
        "email": email,
        "cpf": cpf,
        "senha": hashpassword(senha)
    }
}

export function formatUserPJ(title, body, author, category) {
    return {
        timestamp: Date.now(),
        title: title,
        body: body,
        author: author,
        category: category,
    }
}
