import { useState } from "react";
import Modal from "components/Modal";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./style.css";
import Login from "components/Login";

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser();
    const [path, push] = useLocation();
    const [showModal, setShowModal] = useState(false);

    const handlerClose = () => {
        setShowModal(false);
    }

    const handlerClick = () => {
        if (!isLogged) return setShowModal(true);

        addFav(id);
    }

    const isFaved = favs.some(favId => favId === id);

    const [
        label,
        emoji
    ] = isFaved ? ["Remove from favorites", "❌"] : ["Add to favorites", "❤️"];

    return (
        <>
            {!isLogged && showModal && <Modal onClose={handlerClose}> <Login /></Modal>}
            <button className="gf-fav" onClick={handlerClick}>
                <span role="img" aria-label={label}>{emoji}</span>
            </button>
        </>
    )
}