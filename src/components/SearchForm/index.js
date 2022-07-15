import React, { useState } from "react";
import "./style.css";

function SearchForm({ handlerSubmit: handlerSubmitFromParent }) {
  const [keyword, setKeyword] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerSubmitFromParent({ keyword });
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
