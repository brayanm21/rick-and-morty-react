import { useState } from "react";
import CharacterSearchInput from "../components/CharacterSearchInput/CharacterSearchInput";
import Paginator from "../components/Paginator/Paginator";
import Card from "../components/Card/Card";
import ErrorSearch from "../components/ErrorSearch/ErrorSearch";
import useFetchCharacters from "../hooks/useFetchCharacters";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [pageSearch, setPageSearch] = useState(1);

  const {
    characters,
    characterName,
    loading,
    stateFetch,
    nextScroll,
    stateInput,
    setCharacterName,
    setNextScroll,
    setStateInput,
  } = useFetchCharacters(inputValue, page, pageSearch);

  useInfiniteScroll({
    loading,
    hasMore: nextScroll && !stateInput, // solo activa si estás buscando
    callback: () => {
      setPageSearch((prev) => prev + 1);
    },
  });

  const handleInput = (changue) => {
    setInputValue(changue);
    setStateInput(changue === "");
    setCharacterName([]);
    setPageSearch(1);
    setNextScroll(true);
  };

  const handlePage = (changue) => {
    setPage((prev) => prev + changue);
  };

  const renderMainView = () => (
    <>
      <Paginator handlePage={handlePage} page={page} maxPages={42} />
      <Card characters={characters} isLoading={loading} />
    </>
  );

  const renderSearchView = () =>
    stateFetch ? (
      <Card characters={characterName} isLoading={loading} />
    ) : (
      <ErrorSearch searchQuery={inputValue} />
    );

  return (
    <>
      {loading &&
        ((stateInput && characters.length === 0) ||
          (!stateInput && characterName.length === 0)) && <Loading />}
      <CharacterSearchInput onChange={handleInput} value={inputValue} />
      {stateInput ? renderMainView() : renderSearchView()}
    </>
  );
};

export default Home;
