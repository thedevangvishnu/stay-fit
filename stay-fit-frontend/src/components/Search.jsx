import React from "react";
import Button from "./Button";

const Search = () => {
  return (
    <div className="flex w-1/2">
      <input
        type="text"
        placeholder="Search exercises"
        className="px-4 w-full border-none outline-none"
      />
      <Button>SEARCH</Button>
    </div>
  );
};

export default Search;
