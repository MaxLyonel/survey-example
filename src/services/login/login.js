
const baseApiUrl = 'https://reqres.in/api/login'

export default function login({ username, password }) {
    console.log(JSON.stringify({ username, password }))
    return fetch(baseApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(res => res.json())
        .then(response => {
            const token = response.token
            return token
        })
}