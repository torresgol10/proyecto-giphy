import { useCallback, useContext } from "react";
import userContext from "context/userContext";
import loginService from "service/login";

export default function useUser() {
    const {jwt, setJWT} = useContext(userContext);

    const login = useCallback(({username, password}) => {
        loginService({username, password}).then(jwt => {
            setJWT(jwt);
        })
    }, [setJWT]);

    const logout = useCallback(() => {
        setJWT(null);
    }, [setJWT]);

    return { 
        isLogged: Boolean(jwt),
        login,
        logout
    }
}