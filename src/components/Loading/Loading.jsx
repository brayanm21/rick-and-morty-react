import React from "react";
import "./Loading.css";
import Spinner from "../Spinner/Spinner";

const Loading = () => {
  return (
    <div className="loading-container">
      <Spinner/>
      <p className="loading-text">Cargando personajes...</p>
    </div>
  );
};

export default Loading;