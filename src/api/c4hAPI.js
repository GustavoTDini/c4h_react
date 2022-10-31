export const API = "http://localhost:8080"

export let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substring(-8)

export const headers = {
    "Access-Control-Allow-Headers": "*",
    'Authorization': token,
    'Content-type': 'application/json'
}
