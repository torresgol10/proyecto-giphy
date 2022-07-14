import React from "react";
import { useLocation } from "wouter";
import { useGif } from "hooks/useGif";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import LazyTrending from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

export default function Home() {
  const { loading, gifs } = useGif();
  const [path, push] = useLocation();

  const handlerSubmitFromParent = ({ keyword }) => {
    push(`/search/${keyword}`);
  };

  return (
    <>
      <SearchForm handlerSubmit={handlerSubmitFromParent} />
      {loading ? <Spinner /> : <ListOfGif gifs={gifs} />}

      <LazyTrending />
    </>
  );
}
