import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import Page from "./components/Page";
import InputCharacters from "./components/InputCharacters";
import ErrorSearch from "./components/ErrorSearch";

function App() {
  //state  = estado que guarda los datos de un componente que puede cambiar
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [characterName, setCharactersName] = useState([]);
  const [stateInput, setStateInput] = useState(true);
  const [stateFetch, setStateFetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageSearch, setPageSearch] = useState(1);
  const [nextScrol, setNextScrol] = useState(true);

  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  let apiInput = `https://rickandmortyapi.com/api/character/?page=${pageSearch}&name=${inputValue}`;
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

  useEffect(() => {
    const fetchDataInput = async() => {
      setLoading(true);
      try{
        console.log(apiInput);
        const response = await fetch(apiInput);
        if (!response.ok) {
          setStateFetch(false);
          console.log("Error fetching data");
          return;
        }
        const data = await response.json();
        console.log(data.results);

        // Concatenamos los resultados anteriores con los nuevos
        setCharactersName(prevState => [...prevState, ...data.results]);

        // Controlamos si hay más páginas de datos disponibles
        setNextScrol(data.info.next ? true : false);
        // console.log(nextScrol , data.info.next)

        
        console.log(nextScrol , data.info.next)

        // Establecemos el estado de la solicitud como exitosa
        setStateFetch(true);
      } catch (error) {
        console.error("Error during fetching:", error);
        setStateFetch(false);
      } finally {
        setLoading(false);
      }

    }
    //si input esta vacion "" dice el estado del imput es true si no y nextscroll es true  hace el fetch si no imprime
    inputValue === "" ? setStateInput(true) : nextScrol === true ? fetchDataInput() : console.log('prueba');
  }, [inputValue,pageSearch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de scroll cuando el componente se desmonta
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [loading]);

  function handlePage(changue) {
    setPage(page + changue);
  }
  const handleInput = (changue) => {
    setInputValue(changue.trim());
    setStateInput(false);
    setNextScrol(true)
    setCharactersName([]);
    setPageSearch(1);
  };

  const handleScroll = () => {
        const scrollTop = window.scrollY; // Posición del scroll
        const scrollHeight = document.documentElement.scrollHeight; // Altura total de la página
        const windowHeight = window.innerHeight; // Altura de la ventana

        // Si estamos cerca del final de la página y no estamos cargando más elementos
        if (scrollTop + windowHeight >= scrollHeight - 100 && !loading) {
            setPageSearch(pageSearch + 1);  // Aumentamos el número de página
            console.log('hola scrolls',pageSearch, "ss");
        }
    };

  return (
    <>
      <h1>Api rick y morty</h1>
      <InputCharacters
        onChangue={handleInput}
        value={inputValue}
      ></InputCharacters>
      <p>{inputValue}</p>

      {stateInput ? (
        <>
          <Page handlePage={handlePage} page={page}></Page>
          <Characters characters={characters} />
        </>
      ) : stateFetch ? (
        <Characters characters={characterName} onScroll={handleScroll}/>
      ) : (
        <ErrorSearch></ErrorSearch>
      )}
    </>
  );
}

export default App;
