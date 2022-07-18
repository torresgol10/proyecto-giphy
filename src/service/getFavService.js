const ENDPOINT = "http://localhost:8080";

export default function getFavService({ jwt }) {
    return fetch(`${ENDPOINT}/favs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `${jwt}`
        },
    })
    .then(res => res.json())
    .then(res => {
        const { favs } = res;
        return favs;
    });
}