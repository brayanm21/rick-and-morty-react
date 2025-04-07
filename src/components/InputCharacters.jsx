import React from "react";

const InputCharacters = ({ onChangue, value }) => {
  return (
    <div className="input-container">
      <input
        type="search"
        placeholder="Buscar personaje..."
        value={value}
        onChange={(e) => onChangue(e.target.value)}
      />
    </div>
  );
};

export default InputCharacters;
