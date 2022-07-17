import Gif from "components/Gif";

export default function ListOfGif({ gifs }) {
  return (
    <>
      {gifs.map(({ id, title, url, ...extraInfo }) => {
        return (
          <Gif key={id} title={title} url={url} id={id} extraInfo={extraInfo} />
        );
      })}
    </>
  );
}
