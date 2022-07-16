import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifContext";
import getGifs from "../service/getGift";

const INITIAL_PAGE = 0;

export function useGif({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(0);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, keywordToUse, setGifs, rating]);

  /*Esto es para la paginación*/
  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, page, rating }).then((nextGgifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGgifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { loading, loadingNextPage, gifs, setPage, rating };
}
