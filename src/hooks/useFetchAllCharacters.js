import { useEffect, useState } from "react";

const useFetchAllCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        if (!res.ok) {
          setIsFetchSuccessful(false);
          return;
        }
        const data = await res.json();
        setCharacters(data.results);
        setIsFetchSuccessful(true);
      } catch (err) {
        console.error("Error fetching characters:", err);
        setIsFetchSuccessful(false);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return { characters, loading, isFetchSuccessful };
};

export default useFetchAllCharacters;