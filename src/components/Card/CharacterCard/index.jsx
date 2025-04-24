import React from "react";
import "./styles.css";
import Button from "../../Button/Button";
import {
  statusTranslations,
  genderTranslations,
  speciesTranslations
} from '../../../utils/translations'; //para la traduccion

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="card-img" />
      <p className={`status-badge ${character.status.toLowerCase()}`}>
        {statusTranslations[character.status]}
      </p>
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-description">
          {speciesTranslations[character.species]} - {genderTranslations[character.gender]}
        </p>
        <Button>Ver más</Button>
      </div>
    </div>
  );
};

export default CharacterCard;
