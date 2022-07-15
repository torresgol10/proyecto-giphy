import { API_KEY, API_URL } from "./settings";

export default function getSingleGif(id) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then((response) => response.json())
    .then((result) => {
      const { data } = result;
      const { title, images, import_datetime } = data;
      const { url } = images.downsized_large;

      return { title, url, import_datetime };
    });
}
