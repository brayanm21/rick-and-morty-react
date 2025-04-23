import React from "react";
import "./Paginator.css";
import Button from "../Button/Button";

const Paginator = ({ handlePage, page, maxPages  }) => {
  return (
    <div className="paginator-container">
      <Button onClick={() => handlePage(-1)} disabled={page <= 1}>
      ← Anterior
      </Button>
      <p className="paginator-page-number">{page}</p>
      <Button onClick={() => handlePage(1)} disabled={page >= maxPages}>
      Siguiente →
      </Button>
    </div>
  );
};

export default Paginator;
