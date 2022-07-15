import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useGif } from "hooks/useGif";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import LazyTrending from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import "./style.css";

export default function Home() {
  const { loading, gifs } = useGif();
  const [path, push] = useLocation();

  const handlerSubmitFromParent = useCallback(
    ({ keyword }) => {
      push(`/search/${keyword}`);
    },
    [push]
  );

  return (
    <div className="container">
      <header className="header">
        <SearchForm handlerSubmit={handlerSubmitFromParent} />
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <main className="main">
            <h2>Ultimos Gifs buscado</h2>
            <div className="ListOfGif">
              <ListOfGif gifs={gifs} />
            </div>
          </main>
          <sidebar className="sidebar">
            <LazyTrending />
          </sidebar>
        </>
      )}
    </div>
  );
}
