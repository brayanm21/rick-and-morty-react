const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharactersByPage = async (page) => {
  const res = await fetch(`${BASE_URL}/?page=${page}`);
  if (!res.ok) throw new Error("Failed to fetch characters");
  const data = await res.json();
  return {
    results: data.results,
    totalPages: data.info.pages
  };
};

export const searchCharactersByName = async (name, page = 1) => {
  const res = await fetch(`${BASE_URL}/?page=${page}&name=${name}`);
  if (!res.ok) throw new Error("Failed to search characters");
  const data = await res.json();
  return data;
};

export const searchCharactersById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to search characters");
  const data = await res.json();
  return data;
};