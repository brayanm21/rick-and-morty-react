import React from "react";
import "./SearchInput.css";

const CharacterSearchInput = ({ onChange, value, placeholder }) => {
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CharacterSearchInput;
