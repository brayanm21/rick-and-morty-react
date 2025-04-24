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
    allCharacters,
    searchedCharacters,
    loading,
    isFetchSuccessful,
    hasMoreSearchResults,
    isInputActive,
    setSearchedCharacters,
    setHasMoreSearchResults,
    setIsInputActive,
  } = useFetchCharacters(inputValue, page, pageSearch);

  useInfiniteScroll({
    loading,
    hasMore: hasMoreSearchResults && !isInputActive, // solo activa si estás buscando
    callback: () => {
      setPageSearch((prev) => prev + 1);
    },
  });

  const handleInput = (changue) => {
    setInputValue(changue);
    setIsInputActive(changue === "");
    setSearchedCharacters([]);
    setPageSearch(1);
    setHasMoreSearchResults(true);
  };

  const handlePage = (changue) => {
    setPage((prev) => prev + changue);
  };

  const renderMainView = () => (
    <>
      <Paginator handlePage={handlePage} page={page} maxPages={42} />
      <Card characters={allCharacters} isLoading={loading} />
    </>
  );

  const renderSearchView = () =>
    isFetchSuccessful ? (
      <Card characters={searchedCharacters} isLoading={loading} />
    ) : (
      <ErrorSearch searchQuery={inputValue} />
    );

  return (
    <>
      {loading &&
        ((isInputActive && allCharacters.length === 0) ||
          (!isInputActive && searchedCharacters.length === 0)) && <Loading />}
      <CharacterSearchInput onChange={handleInput} value={inputValue} />
      {isInputActive ? renderMainView() : renderSearchView()}
    </>
  );
};

export default Home;
