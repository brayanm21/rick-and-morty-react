import React from "react";
//rafce crear el esqueleto de este componente

const Characters = ({ characters }) => {
  return (
    <div className="grid-img">
      {characters.map(
        //ya que character es un array usamos map para recorrerlo
        (character) => {
          //cada elemento va a ser un character
          return (
            //retornamos //devemos darle una key para que se pueda identificar
            <div key={character.id} className="card">
              <img
                src={character.image}
                alt={character.name}
                className="card-img"
              />
              <p className={`position ${character.status}`}>{character.status}</p>
              <div className="card-content">
                <h3 className="card-title">{character.name}</h3>
                <p className="card-description">{character.species} - {character.gender}</p>
                <button>Ver más</button>
              </div>
            </div>
          ); //usamos character y no characters ya que estamos en cada elemento
        }
      )}
    </div>
  );
};

export default Characters;
