import React from "react";
import Spinner from "components/Spinner";
import ListOfGif from "components/ListOfGif";
import { useGif } from "hooks/useGif";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGif({ keyword });

  /*  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);*/

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h3>{decodeURI(keyword)}</h3>
      <ListOfGif gifs={gifs} />
    </>
  );
}
