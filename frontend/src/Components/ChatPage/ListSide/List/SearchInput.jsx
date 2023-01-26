import React, { useState } from "react";
import "../../ChatPage.css";
import { Search } from "@mui/icons-material";

const SearchInput = ({ input, setInput }) => {
  let [search, setSearch] = useState("");


  return (
    <div id="searchInput-NewChat">
      {!search && <Search />}
      <input
        id="searchInputBoxListSide"
        onChange={(e) => { setInput(e.target.value) }}
        value={input}
        placeholder="Search or Start New Chat"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
