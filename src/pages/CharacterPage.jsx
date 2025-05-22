import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useIdCharacters from "../hooks/useIdCharacters";
import Loading from "../components/Loading/Loading";
import ErrorSearch from "../components/ErrorSearch/ErrorSearch";
import "./CharacterPage.css";
import {
  statusTranslations,
  genderTranslations,
  speciesTranslations,
  locationTranslations,
} from "../utils/translations";

const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { character, loading, isFetchSuccessful } = useIdCharacters(id);

  if (loading) return <Loading />;
  if (!isFetchSuccessful)
    return <ErrorSearch message="No existe ese Personaje" />;

  const {
    name,
    image,
    origin,
    status,
    id: charId,
    species,
    gender,
    episode,
  } = character;

  const translations = {
    Origen: locationTranslations[origin.name] || origin.name,
    Estado: statusTranslations[status] || status,
    ID: charId,
    Especie: speciesTranslations[species] || species,
    Género: genderTranslations[gender] || gender,
  };

  const episodeList = episode.map((ep) => ep.split("/").pop()).join(", ");

  return (
    <>
      <main className="outer-container">
        <div className="container">
          <section className="content">
            <h1 className="central-text">{name}</h1>
            <div className="middle-section">
              <div className="image-container">
                <img
                  src={image}
                  alt={`Imagen de ${name}`}
                  className="character-img"
                />
              </div>
            </div>
          </section>

          <section className="info">
            {Object.entries(translations).map(([label, value]) => (
              <React.Fragment key={label}>
                <div className="info-section">
                  <span className="info-title">{label}: </span>
                  <span className="info-content">{value}</span>
                </div>
                {label !== "Género" && <hr className="info-line" />}
              </React.Fragment>
            ))}
            <div className="episode-list">
              <h2>Episodios</h2>
              <p>{episodeList}</p>
            </div>
          </section>
        </div>
      </main>
    
      <button onClick={() => navigate(-1)}>Volver</button>
    </>
  );
};

export default CharacterPage;
