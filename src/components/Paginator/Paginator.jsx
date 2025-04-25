import React from "react";
import "./Paginator.css";
import Button from "../Button/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Paginator = ({ handlePage, page, maxPages }) => {
  return (
    <div className="paginator-container">
      <Button
        onClick={() => handlePage(-1)}
        disabled={page <= 1}
        aria-label="Página anterior"
      >
        <FaArrowLeft />
        <span>Anterior</span>
      </Button>

      <p className="paginator-page-number">{page}</p>

      <Button
        onClick={() => handlePage(1)}
        disabled={page >= maxPages}
        aria-label="Página siguiente"
      >
        <span>Siguiente</span>
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Paginator;
