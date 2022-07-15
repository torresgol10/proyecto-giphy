import React, { useState } from "react";
import { useLocation } from "wouter";
import "./style.css";

function SearchForm() {
  const [keyword, setKeyword] = useState("");
  const [path, push] = useLocation();

  const handlerSubmit = (e) => {
    e.preventDefault();
    push(`/search/${keyword}`);
  };

  const handlerChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit} className="formSearch">
      <input
        placeholder="Busca amigo"
        type="text"
        value={keyword}
        onChange={handlerChange}
      />
      <button>Search</button>
    </form>
  );
}

export default React.memo(SearchForm);
