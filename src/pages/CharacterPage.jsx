import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useIdCharacters from "../hooks/useIdCharacters";
import Loading from "../components/Loading/Loading";
import ErrorSearch from "../components/ErrorSearch/ErrorSearch";

const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { character, loading, isFetchSuccessful } = useIdCharacters(id);

  if (loading) return <Loading />;

  return (
    <>
      {!isFetchSuccessful ? (
        <ErrorSearch message="No existe ese Personaje" />
      ) : (
        <>
          <p>hola</p>
          <p>{JSON.stringify(character)}</p>
        </>
      )}

      <button onClick={() => navigate(-1)}>
        Volver
      </button>
    </>
  );
};

export default CharacterPage;
