import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifContext";
import getGifs from "../service/getGift";

const INITIAL_PAGE = 0;

export function useGif({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(0);
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
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, page }).then((nextGgifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGgifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
}
