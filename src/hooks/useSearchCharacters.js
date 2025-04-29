import { useEffect, useState } from "react";
import { searchCharactersByName } from "../services/characterService";

const useSearchCharacters = (inputValue, pageSearch) => {
  const [searchedCharacters, setSearchedCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(true);
  const [hasMoreResults, setHasMoreResults] = useState(true);

  useEffect(() => {
    if (!inputValue || loading) return;

    const getSearchResults = async () => {
      setLoading(true);
      try {
        const data = await searchCharactersByName(inputValue, pageSearch);
        setSearchedCharacters((prev) => {
          const idsPrev = new Set(prev.map((char) => char.id));
          const nuevos = data.results.filter((char) => !idsPrev.has(char.id));
          return [...prev, ...nuevos];
        });
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

    getSearchResults();
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