import { useEffect, useState, useContext } from "react";

import getDetail from "service/getDetail";
import GifsContext from "context/GifContext";

export default function useSingleGif({ id } = {}) {
  const { gifs } = useContext(GifsContext);
  const gifCustom = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifCustom);

  useEffect(() => {
    if (!gif) {
      getDetail(id).then((gifResult) => {
        setGif(gifResult);
      });
    }
  }, [gif, id]);

  return { gif };
}
