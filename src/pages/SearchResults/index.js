import React, { useCallback, useEffect, useRef } from "react";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import { useGif } from "hooks/useGif";
import "./styles.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import useSEO from "hooks/useSEO";
import SearchForm from "components/SearchForm";

export default function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGif({ keyword, rating });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });
  const title = gifs ? `${gifs.length} resultado de ${decodeURI(keyword)}` : "";
  useSEO({ title: title });

  const handlerNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const debounceHandlerNextPage = useCallback(
    debounce(() => handlerNextPage(), 1000),
    []
  );

  useEffect(() => {
    if (show) debounceHandlerNextPage();
  }, [show, debounceHandlerNextPage]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <header className="header">
        <SearchForm initialKeyword={keyword} initialRating={rating} />
      </header>

      <h3>{decodeURI(keyword)}</h3>
      <div className="ListOfGif">
        <ListOfGif gifs={gifs} />
      </div>
      <div ref={externalRef} id="visor"></div>
    </>
  );
}
