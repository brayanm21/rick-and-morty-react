import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useIdCharacters from "../../hooks/useIdCharacters";
import Loading from "../../components/ui/Loading";
import SearchError from "../../components/SearchError";
import Button from "../../components/ui/Button";
import CharacterDetailCard from "../../components/character/CharacterDetailCard";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { character, loading, isFetchSuccessful } = useIdCharacters(id);

  if (loading) return <Loading />;
  if (!isFetchSuccessful)
    return <SearchError message="No existe ese Personaje" />;

  return (
    <>
      <CharacterDetailCard character={character} />
      <Button onClick={() => navigate(-1)}>Volver</Button>
    </>
  );
};

export default CharacterDetailPage;
