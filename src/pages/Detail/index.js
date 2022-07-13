import React, { useEffect, useState, useContext } from "react";

import getDetail from "../../service/getDetail";
import GifsContext from "../../context/GifContext";

export default function Detail({ params }) {
  const { gifs } = useContext(GifsContext);
  console.log(gifs);

  const [gif, setGif] = useState({});

  const id = params.id;

  useEffect(() => {
    if (!gifs) {
      const gifCustom = gifs.find((singleGif) => singleGif.id === id);
      setGif(gifCustom);
    } else {
      getDetail(id).then((gifResult) => {
        setGif(gifResult);
      });
    }
  }, [id]);

  return (
    <div>
      <h1>{gif.title}</h1>
      Import: {gif.import_datetime}
      <img src={gif.url} alt="" />
    </div>
  );
}
