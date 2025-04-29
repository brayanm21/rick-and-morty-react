import { useEffect, useState } from "react";
import { searchCharactersById } from "../services/characterService";

const useIdCharacters = (id) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFetchSuccessful, setIsFetchSuccessful] = useState(true);

  useEffect(() => {
    if (!id) return;
    const getCharacters = async () => {
      setLoading(true);
      try {
        const data = await searchCharactersById(id);
        setCharacter(data);
        setIsFetchSuccessful(true);
      } catch (err) {
        console.error("Error fetching characters:", err);
        setIsFetchSuccessful(false);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [id]);

  return { character, loading, isFetchSuccessful };
};

export default useIdCharacters;
