import React, {useEffect, useState} from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import "./style.css";

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
            <form className="form" onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input placeholder="username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                <label for="password">Password</label>
                <input placeholder="password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">Login</button>

            </form>
        </>
    );
}