import React, { useState } from "react";
import "../../ChatPage.css";
import { Search } from "@mui/icons-material";

const SearchInput = () => {
  let [search, setSearch] = useState("");
  const searchFunction = (e) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <div id="searchInput-NewChat">
      {!search && <Search />}
      <input
        id="searchInputBoxListSide"
        onChange={searchFunction}
        placeholder="Search or Start New Chat"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
