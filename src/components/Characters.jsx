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
            <div key={character.id}>
              <p>{character.name}</p>
              <img src={character.image} alt={character.name} />
            </div>
          ); //usamos character y no characters ya que estamos en cada elemento
        }
      )}
      
    </div>
  );
};

export default Characters;
