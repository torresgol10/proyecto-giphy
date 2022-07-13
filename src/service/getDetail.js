import { API_KEY } from "./settings";

export default function getSingleGif(id) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then((response) => response.json())
    .then((result) => {
      const { data } = result;
      const { title, images, import_datetime } = data;
      const { url } = images.downsized_large;

      return { title, url, import_datetime };
    });
}
