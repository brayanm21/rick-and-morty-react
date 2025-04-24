import { useEffect, useState } from "react";
import { fetchCharactersByPage } from "../services/characterService";

const useFetchAllCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const data = await fetchCharactersByPage(page);
        setCharacters(data.results);
        setIsFetchSuccessful(true);
      } catch (err) {
        console.error("Error fetching characters:", err);
        setIsFetchSuccessful(false);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [page]);

  return { characters, loading, isFetchSuccessful };
};

export default useFetchAllCharacters;
