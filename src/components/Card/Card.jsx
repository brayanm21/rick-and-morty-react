import React from "react";
import "./Card.css";
import CharacterCard from "./CharacterCard";
import SkeletonCard from "./SkeletonCard";

const Card = ({ characters = [], isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="character-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Card;
