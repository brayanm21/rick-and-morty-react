import { useEffect, useState, useCallback } from "react";
import { fetchCharactersByPage } from "../services/characterService";

const useFetchAllCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  const getCharacters = useCallback(async () => {
    if (page === null) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCharactersByPage(page);
      setCharacters(data.results || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("Error fetching characters:", err);
      setError("Failed to fetch characters.");
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return { characters, loading, totalPages, error };
};

export default useFetchAllCharacters;
