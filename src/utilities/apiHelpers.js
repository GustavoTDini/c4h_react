// format post for the add API
export function formatUserPF(title, body, author, category) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        title: title,
        body: body,
        author: author,
        category: category,
    }
}

export function formatUserPJ(title, body, author, category) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        title: title,
        body: body,
        author: author,
        category: category,
    }
}

export function formatUserPF(title, body, author, category) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        title: title,
        body: body,
        author: author,
        category: category,
    }
}
