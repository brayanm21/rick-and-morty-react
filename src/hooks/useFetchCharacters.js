import { useEffect, useState } from "react";

const useFetchCharacters = (inputValue, page, pageSearch) => {
  const [characters, setCharacters] = useState([]);
  const [characterName, setCharacterName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateFetch, setStateFetch] = useState(true);
  const [nextScroll, setNextScroll] = useState(true);
  const [stateInput, setStateInput] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const url =
          inputValue === ""
            ? `https://rickandmortyapi.com/api/character/?page=${page}`
            : `https://rickandmortyapi.com/api/character/?page=${pageSearch}&name=${inputValue}`;

        const response = await fetch(url);
        if (!response.ok) {
          setStateFetch(false);
          return;
        }

        const data = await response.json();

        if (inputValue === "") {
          setCharacters(data.results);
        } else {
          setCharacterName((prev) => [...prev, ...data.results]);
          setNextScroll(Boolean(data.info?.next));
        }

        setStateFetch(true);
      } catch (error) {
        console.error("Error during fetch:", error);
        setStateFetch(false);
      } finally {
        setLoading(false);
      }
    };

    if (inputValue === "") {
      fetchData();
    } else if (nextScroll) {
      fetchData();
    }
  }, [inputValue, page, pageSearch]);

  return {
    characters,
    characterName,
    loading,
    stateFetch,
    nextScroll,
    stateInput,
    setCharacterName,
    setNextScroll,
    setStateInput,
  };
};

export default useFetchCharacters;
