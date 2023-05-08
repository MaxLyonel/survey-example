
const baseApiUrl = process.env.REACT_APP_BASE_API_URL
const api = `${baseApiUrl}/global/city`

export default function getEmployees() {
    console.log(api)
    return fetch(api, {
        method: 'GET'
    }).then(res => res.json())
        .then(response => {
            const employees = response
            return employees
        })
}