import React from "react";

const Page = ({onPage , pagina}) => {
  return (
    <div className="grid-page">
      <button onClick={()=>onPage(-1)} disabled={pagina === 1}>
        Anterior pagina
      </button>
      <p>{pagina}</p>
      <button onClick={()=>onPage(1)} disabled={pagina === 42}>
        Siguiente pagina
      </button>
    </div>
  );
};

export default Page;
