import React, { useState } from "react";
import { useLocation } from "wouter";
import { useGif } from "hooks/useGif";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import LazyTrending from "components/TrendingSearches";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, push] = useLocation();
  const { loading, gifs } = useGif();

  const handlerChange = (e) => {
    setKeyword(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    push(`/search/${keyword}`);
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Busca amigo"
          type="text"
          value={keyword}
          onChange={handlerChange}
        />
      </form>
      <div className="ListOfGif">
        {loading ? <Spinner /> : <ListOfGif gifs={gifs} />}
      </div>
      <LazyTrending />
    </>
  );
}
