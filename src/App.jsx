import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Page from "./components/Page";

function App() {
  //state  = estado que guarda los datos de un componente que puede cambiar
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  //hook = es una función de JavaScript que permite acceder al estado y ciclo de vida de React
  //hook useEffect = es una herramienta que permite controlar los efectos secundarios en los componentes
  useEffect(() => {
    async function fetchData() {
      // funcion async para hacer luego el llamado
      const response = await fetch(api); // fetch para hacer la peticion a la api esperando su repsuests await
      const data = await response.json(); // esperamos la respuesta para luego convertila a json
      console.log(data.results);
      setCharacters(data.results); //damos los datos al estado usando setCharacters
    }
    fetchData(); //llamamos la funcion
  }, [page]); //cada vez que el estado de pagina cambie este llamara de nuevo el hook de useeffect

  function handlePage(changue) {
    setPage(page + changue);
  }

  return (
    <>
      <h1>Api rick y morty</h1>
      <Page handlePage={handlePage} page={page}></Page>
      <Characters characters={characters} />
    </>
  );
}

export default App;
