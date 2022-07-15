import React, { useCallback, useEffect, useRef } from "react";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import { useGif } from "hooks/useGif";
import "./styles.css";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGif({ keyword });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

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
      <h3>{decodeURI(keyword)}</h3>
      <div className="ListOfGif">
        <ListOfGif gifs={gifs} />
      </div>
      <div ref={externalRef} id="visor"></div>
    </>
  );
}
