import Fav from "components/Fav";
import React from "react";
import { Link } from "wouter";
import "./style.css"

function Gif({ id, title, url }) {
  return (
    <>
      <div className="Gif">
        <div className="Gif-buttons">
          <Fav id={id}></Fav>
        </div>
        <Link to={`/gif/${id}`}>
          <img loading="lazy" className="ListOfGifs-item" src={url} alt={title} />
        </Link>
      </div>
    </>
  );
}

export default React.memo(Gif, (prevGif, nextGif) => {
  return prevGif.id === nextGif.id;
});
