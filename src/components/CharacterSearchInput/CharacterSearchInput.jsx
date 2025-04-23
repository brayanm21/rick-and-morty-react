import React from "react";
import "./CharacterSearchInput.css";

const CharacterSearchInput = ({ onChange, value }) => {
  return (
    <div className="search-input-container">
      <input
        className="search-input"
        type="search"
        placeholder="Buscar personaje..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CharacterSearchInput;
