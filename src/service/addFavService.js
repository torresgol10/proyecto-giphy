const ENDPOINT = "http://localhost:8080";

export default function addFavService({id, jwt}) {
    return fetch(`${ENDPOINT}/favs/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwt })
    })    
    .then(res => res.json())
    .then(res => {
        const { favs } = res;
        return favs;
    });
}