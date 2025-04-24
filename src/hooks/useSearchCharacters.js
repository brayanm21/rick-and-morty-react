import { useEffect, useState } from "react";

const useSearchCharacters = (inputValue, pageSearch) => {
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(true);
  const [hasMoreResults, setHasMoreResults] = useState(true);

  useEffect(() => {
    if (!inputValue) return;

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const url = `https://rickandmortyapi.com/api/character/?page=${pageSearch}&name=${inputValue}`;
        const response = await fetch(url);
        if (!response.ok) {
          setIsFetchSuccessful(false);
          setHasMoreResults(false);
          return;
        }

        const data = await response.json();
        setSearchedCharacters((prev) => [...prev, ...data.results]);
        setHasMoreResults(Boolean(data.info?.next));
        setIsFetchSuccessful(true);
      } catch (error) {
        console.error("Error searching characters:", error);
        setIsFetchSuccessful(false);
        setHasMoreResults(false);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [inputValue, pageSearch]);

  return {
    searchedCharacters,
    loading,
    isFetchSuccessful,
    hasMoreResults,
    setSearchedCharacters,
    setHasMoreResults,
  };
};

export default useSearchCharacters;