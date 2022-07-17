import React from "react";
import { useGif } from "hooks/useGif";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import LazyTrending from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import "./style.css";

export default function Home() {
  const { loading, gifs } = useGif();

  return (
    <div className="container">
      <header className="header">
        <SearchForm />
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
          <div className="sidebar">
            <LazyTrending />
          </div>
        </>
      )}
    </div>
  );
}
