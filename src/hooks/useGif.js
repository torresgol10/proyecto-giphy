import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifContext";
import getGifs from "../service/getGift";

export function useGif({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { loading, gifs };
}
