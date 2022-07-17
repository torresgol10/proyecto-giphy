import React from "react"
import { Link } from "wouter"
import useUser from "hooks/useUser";
import "./style.css";

export default function Header({ }) {
    const { isLogged, logout } = useUser();

    const handlerClick = (e) => {
        e.preventDefault();
        logout();
    }
    return (
        <header className="gf-header">
            {isLogged ?
            <Link href="#" onClick={handlerClick}>Logout</Link>
            : <Link to="/login">Login</Link> } 
        </header>
    )
}