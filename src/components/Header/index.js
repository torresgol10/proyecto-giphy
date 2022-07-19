import React from "react"
import { useRoute, Link } from "wouter"
import useUser from "hooks/useUser";
import "./style.css";

export default function Header({ }) {
    const { isLogged, logout } = useUser();
    const [match] = useRoute("/login")

    const handlerClick = (e) => {
        e.preventDefault();
        logout();
    }

    const renderLoginButtons = ({ isLogged }) => {
        return isLogged ?
            <Link href="#" onClick={handlerClick}>Logout</Link>
            : <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </>
    }

    const content = match ? null : renderLoginButtons({ isLogged });

    return (
        <header className="gf-header">
            {content}
        </header>
    )
}