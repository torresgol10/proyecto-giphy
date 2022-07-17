import React, {useEffect, useState} from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [path, push] = useLocation();
    const { login, isLogged } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({username, password});
    }

    useEffect(() => {
        if(isLogged) {
            push("/");
        }
    }, [isLogged, push]);

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />

                <input placeholder="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Login</button>

            </form>
        </>
    );
}