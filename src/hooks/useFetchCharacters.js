import { useEffect, useState } from "react";

const useFetchCharacters = (inputValue, page, pageSearch) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(true);
  const [hasMoreSearchResults, setHasMoreSearchResults] = useState(true);
  const [isInputActive, setIsInputActive] = useState(true);

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
          setIsFetchSuccessful(false);
          return;
        }

        const data = await response.json();

        if (inputValue === "") {
          setAllCharacters(data.results);
        } else {
          setSearchedCharacters((prev) => [...prev, ...data.results]);
          setHasMoreSearchResults(Boolean(data.info?.next));
        }

        setIsFetchSuccessful(true);
      } catch (error) {
        console.error("Error during fetch:", error);
        setIsFetchSuccessful(false);
      } finally {
        setLoading(false);
      }
    };

    if (inputValue === "") {
      fetchData();
    } else if (hasMoreSearchResults) {
      fetchData();
    }
  }, [inputValue, page, pageSearch]);// eslint-disable-line react-hooks/exhaustive-deps

  return {
    allCharacters,
    searchedCharacters,
    loading,
    isFetchSuccessful,
    hasMoreSearchResults,
    isInputActive,
    setSearchedCharacters,
    setHasMoreSearchResults,
    setIsInputActive,
  };
};

export default useFetchCharacters;
