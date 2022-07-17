const ENDPOINT = "http://localhost:8000/api";

export default function loginService({username, password}){
    return fetch(`${ENDPOINT}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(res => res.json())
    .then(res => {
        const { jwt } = res
        return jwt
    });
}