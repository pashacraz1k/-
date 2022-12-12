import { React, useState } from "react";

import Cart from "./Cart";

function Search({ data }) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    console.log(data);
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <input type="text" onChange={inputHandler} />
      </div>
    </div>
  );
}

export default Search;
