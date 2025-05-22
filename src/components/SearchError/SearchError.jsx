import React from "react";
import "./SearchError.css";

const SearchError = ({ message = "No existe ese nombre", searchQuery }) => {
  return (
    <div className="error-container">
      <h3 className="error-title">{message}</h3>
      {searchQuery && <p className="error-message">No se encontraron resultados para <span className="highlight">{searchQuery}</span>. Por favor, intenta con otro nombre o verifica la ortografía.</p>}
      {!searchQuery && <p className="error-message">Intenta buscar un personaje específico.</p>}
    </div>
  );
};

export default SearchError;