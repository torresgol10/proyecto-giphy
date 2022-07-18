import React, { useEffect, useState } from "react";
import getFavService from "service/getFavService";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJWT] = useState(() => localStorage.getItem("jwt"));

  useEffect( () => {
    if(!jwt) return setFavs([]);
    getFavService({ jwt }).then(setFavs);
  }, [jwt]);

  return (
    <Context.Provider value={{ jwt, setJWT, favs, setFavs }}>{children}</Context.Provider>
  );
}

export default Context;
