import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
