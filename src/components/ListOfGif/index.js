import Gif from "../../components/Gif.js";
import "./styles.css";

export default function ListOfGif({ gifs }) {
  return (
    <>
      {gifs.map(({ id, title, url }) => {
        return <Gif key={id} title={title} url={url} id={id} />;
      })}
    </>
  );
}
