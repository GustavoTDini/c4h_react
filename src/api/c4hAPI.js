export const API = "http://localhost:8080"
export const origin = "http://localhost:3000"

export let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substring(-8)

export const headers = {
    'Access-Control-Allow-Header': '*',
    'Access-Control-Allow-Origin': '*',
    'Authorization': token,
    'Connection': 'keep-alive',
    'Content-type': 'application/json',
}
