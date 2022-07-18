import { useCallback, useContext } from "react";
import userContext from "context/userContext";
import loginService from "service/login";
import addFavService from "service/addFavService";

export default function useUser() {
    const { jwt, setJWT, favs, setFavs } = useContext(userContext);

    const addFav = useCallback((id) => {
        addFavService({ id, jwt }).then(favs => {
            setFavs(favs);
        })
    }, [jwt, setFavs]);

    const login = useCallback(({ username, password }) => {
        loginService({ username, password }).then(jwt => {
            localStorage.setItem("jwt", jwt);
            setJWT(jwt);
        })
    }, [setJWT]);

    const logout = useCallback(() => {
        localStorage.setItem("jwt", null);
        setJWT(null);
    }, [setJWT]);

    return {
        isLogged: Boolean(jwt),
        login,
        logout,
        addFav,
        favs
    }
}