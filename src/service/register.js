const ENDPOINT = "http://localhost:8080";

export default function registerService({ username, password }) {
    return fetch(`${ENDPOINT}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (res.status != 201) throw new Error(res.error);
        return res.json()
    })
}