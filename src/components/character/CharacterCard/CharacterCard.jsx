import React from "react";
import { useNavigate } from "react-router-dom";

import "./CharacterCard.css";
import Button from "../../ui/Button";
import {
  genderTranslations,
  speciesTranslations
} from '../../../utils/translations'; // para la traducción
import StatusBadge from "../../ui/StatusBadge";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/characters/${character.id}`);
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="card-img" />
      <StatusBadge status={character.status} />
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-description">
          {speciesTranslations[character.species]} - {genderTranslations[character.gender]}
        </p>
        <Button onClick={handleClick}>Ver más</Button>
      </div>
    </div>
  );
};

export default CharacterCard;