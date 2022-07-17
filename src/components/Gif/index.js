import React from "react";
import { Link } from "wouter";

function Gif({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`}>
      <img loading="lazy" className="ListOfGifs-item" src={url} alt={title} />
    </Link>
  );
}

export default React.memo(Gif, (prevGif, nextGif) => {
  return prevGif.id === nextGif.id;
});
