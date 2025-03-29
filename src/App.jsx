import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //state  = estado que guarda los datos de un componente que puede cambiar
  const [characters, setCharacters] = useState([]);
  const [pagina, setPagina] = useState(1);
  let api =  `https://rickandmortyapi.com/api/character/?page=${pagina}`;
  //hook = es una función de JavaScript que permite acceder al estado y ciclo de vida de React
  //hook useEffect = es una herramienta que permite controlar los efectos secundarios en los componentes
  useEffect(()=>{
    
    async function fetchData() {// funcion async para hacer luego el llamado
      const response = await fetch(api)// fetch para hacer la peticion a la api esperando su repsuests await
      const data = await response.json(); // esperamos la respuesta para luego convertila a json
      console.log(data.results);
      setCharacters(data.results);//damos los datos al estado usando setCharacters
    }
    fetchData();//llamamos la funcion
  },[pagina])//cada vez que el estado de pagina cambie este llamara de nuevo el hook de useeffect
  

  return (
    <>
    <h1>Api rick y morty</h1>
    <div className='grid-page'>
      <button onClick={()=>setPagina((pagina)=> pagina - 1)}>Anterior pagina</button>
      <p>{pagina}</p>
      <button onClick={()=>setPagina((pagina)=> pagina + 1)}>Siguiente pagina</button>
    </div>
    <div className="grid-img">
    {characters.map(//ya que character es un array usamos map para recorrerlo
      (character)=>{//cada elemento va a ser un character
        return(//retornamos //devemos darle una key para que se pueda identificar
          <div key={character.id}>
          <p>{character.name}</p>
          <img src={character.image} alt={character.name}/>
          </div>
        )//usamos character y no characters ya que estamos en cada elemento
      }
    )
    }
    </div>
    </>
  )
}

export default App
