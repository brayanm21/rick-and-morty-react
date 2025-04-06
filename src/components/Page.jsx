import React from "react";

const Page = ({handlePage , page}) => {
  return (
    <div className="grid-page">
      <button onClick={()=>handlePage(-1)} disabled={page === 1}>
        Anterior pagina
      </button>
      <p className="p-page">{page}</p>
      <button onClick={()=>handlePage(1)} disabled={page === 42}>
        Siguiente pagina
      </button>
    </div>
  );
};

export default Page;
