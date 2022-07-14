import React, { useState } from "react";

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
    <form onSubmit={handlerSubmit}>
      <input
        placeholder="Busca amigo"
        type="text"
        value={keyword}
        onChange={handlerChange}
      />
    </form>
  );
}

export default React.memo(SearchForm);
