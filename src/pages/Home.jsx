import { useState } from "react";
import CharacterSearchInput from "../components/CharacterSearchInput/CharacterSearchInput";
import Paginator from "../components/Paginator/Paginator";
import Card from "../components/Card/Card";
import ErrorSearch from "../components/ErrorSearch/ErrorSearch";
import useFetchAllCharacters from "../hooks/useFetchAllCharacters";
import useSearchCharacters from "../hooks/useSearchCharacters";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Loading from "../components/Loading/Loading";

const Home = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [pageSearch, setPageSearch] = useState(1);

  const isSearching = inputValue !== "";

  // Datos de exploración
  const {
    characters: allCharacters,
    loading: loadingAll,
    //isFetchSuccessful: fetchAllSuccess,
  } = useFetchAllCharacters(page);

  // Datos de búsqueda
  const {
    searchedCharacters,
    loading: loadingSearch,
    isFetchSuccessful: fetchSearchSuccess,
    hasMoreResults,
    setSearchedCharacters,
    setHasMoreResults,
  } = useSearchCharacters(inputValue, pageSearch);

  useInfiniteScroll({
    loading: loadingSearch,
    hasMore: isSearching && hasMoreResults,
    callback: () => {
      setPageSearch((prev) => prev + 1);
    },
  });

  const handleInput = (value) => {
    setInputValue(value);
    setSearchedCharacters([]); // Reset resultados anteriores
    setPageSearch(1); // Reset página de búsqueda
    setHasMoreResults(true); // Reiniciar scroll
  };

  const handlePage = (changue) => {
    setPage((prev) => prev + changue);
  };

  const renderMainView = () => (
    <>
      <Paginator handlePage={handlePage} page={page} maxPages={42} />
      <Card characters={allCharacters} isLoading={loadingAll} />
    </>
  );

  const renderSearchView = () => {
    if (loadingSearch && searchedCharacters.length === 0) return null;

    return fetchSearchSuccess ? (
      <Card characters={searchedCharacters} />
    ) : (
      <ErrorSearch searchQuery={inputValue} />
    );
  };

  const isLoading =
    (isSearching && loadingSearch && searchedCharacters.length === 0) ||
    (!isSearching && loadingAll && allCharacters.length === 0);

  return (
    <>
      {isLoading && <Loading />}
      <CharacterSearchInput onChange={handleInput} value={inputValue} />
      {!isLoading && (isSearching ? renderSearchView() : renderMainView())}
    </>
  );
};

export default Home;
