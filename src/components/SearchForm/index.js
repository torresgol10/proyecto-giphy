import Button from "components/Button";
import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import "./style.css";

const RATING = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = "", initialRating = RATING[0] }) {
  //const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
  //const [rating, setRating] = useState(initialRating);
  //const [times, setTimes] = useState(0);
  const { keyword, times, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating
  });

  const [path, push] = useLocation();

  const handlerSubmit = (e) => {
    e.preventDefault();
    push(`/search/${keyword}/${rating}`);
  };

  const handlerChange = (e) => {
    updateKeyword(e.target.value);
  };

  const handlerChangeRating = (e) => {
    updateRating(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit} className="formSearch">
      <input
        placeholder="Busca amigo"
        type="text"
        value={keyword}
        onChange={handlerChange}
      />
      <select onChange={handlerChangeRating} value={rating}>
        <option disabled>Rating type </option>
        {RATING.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <Button>Search</Button>
    </form>
  );
}

export default React.memo(SearchForm);
