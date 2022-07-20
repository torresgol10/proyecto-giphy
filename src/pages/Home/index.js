import React from "react";
import { useGif } from "hooks/useGif";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import LazyTrending from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

export default function Home() {
  const { loading, gifs } = useGif();

  return (
    <div className="container">
      <header className="o-header">
        <SearchForm />
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="App-wrapper">
            <div className="App-main">
              <div className="App-results">
                <h3 className="App-title">Última búsqueda</h3>
                <ListOfGif gifs={gifs} />
              </div>                    
              <div className="App-category">
                <LazyTrending />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
