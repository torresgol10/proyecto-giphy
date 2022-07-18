import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./style.css";

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser();
    const [path, push] = useLocation();

    const handlerClick = () => {
        if (!isLogged) return push("/login");
        
        addFav(id);
    }
    
    const isFaved = favs.some(favId => favId === id);
    console.log(favs)
    const [
        label,
        emoji
    ] = isFaved ? ["Remove from favorites", "❌"] : ["Add to favorites", "❤️"];

    return (
        <button className="gf-fav" onClick={handlerClick}>
            <span role="img" aria-label={label}>{emoji}</span>
        </button>
    )
}