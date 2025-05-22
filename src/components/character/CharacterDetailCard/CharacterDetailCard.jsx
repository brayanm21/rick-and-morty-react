import React from "react";
import "./CharacterDetailCard.css";
import {
  statusTranslations,
  genderTranslations,
  speciesTranslations,
  locationTranslations,
} from "../../../utils/translations";

const CharacterDetailCard = ({ character }) => {
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
  );
};

export default CharacterDetailCard;
