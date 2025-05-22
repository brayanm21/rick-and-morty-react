import { useState } from "react";
import SearchInput from "../../components/ui/SearchInput";
import Paginator from "../../components/ui/Paginator";
import CharacterGrid from "../../components/character/CharacterGrid";
import SearchError from "../../components/SearchError";
import useFetchAllCharacters from "../../hooks/useFetchAllCharacters";
import useSearchCharacters from "../../hooks/useSearchCharacters";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Loading from "../../components/ui/Loading";
import { useSearchParams } from "react-router-dom";

const validatePage = (page) => {
  if (isNaN(page) || page < 1) return 1;
  if (page > 42) return 42;
  return page;
};

const CharactersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawPage = searchParams.get("page");
  const page = validatePage(Number(rawPage));
  const rawSearch = searchParams.get("name") || "";
  const [inputValue, setInputValue] = useState(rawSearch);
  const [pageSearch, setPageSearch] = useState(1);
  const isSearching = inputValue !== "";

  const { characters: allCharacters, loading: loadingAll, totalPages } = useFetchAllCharacters(!isSearching ? page : null);
  const { searchedCharacters, loading: loadingSearch, isFetchSuccessful: fetchSearchSuccess, hasMoreResults, setSearchedCharacters, setHasMoreResults } = useSearchCharacters(inputValue, pageSearch);

  useInfiniteScroll({
    loading: loadingSearch,
    hasMore: isSearching && hasMoreResults,
    callback: () => setPageSearch((prev) => prev + 1),
  });

  const handleInput = (value) => {
    setInputValue(value);
    setSearchedCharacters([]);
    setPageSearch(1);
    setHasMoreResults(true);
    const newParams = new URLSearchParams();
    if (value) newParams.set("name", value);
    newParams.set("page", page);
    setSearchParams(newParams);
  };

  const handlePage = (change) => {
    const newPage = page + change;
    setSearchParams({ page: newPage });
  };

  const renderMainView = () => (
    <>
      <Paginator handlePage={handlePage} page={page} maxPages={totalPages} />
      <CharacterGrid characters={allCharacters} isLoading={loadingAll} />
    </>
  );

  const renderSearchView = () => {
    if (loadingSearch && searchedCharacters.length === 0) return null;
    return fetchSearchSuccess ? (
      <CharacterGrid characters={searchedCharacters} />
    ) : (
      <SearchError searchQuery={inputValue} />
    );
  };

  const isLoading = (isSearching && loadingSearch && searchedCharacters.length === 0) || (!isSearching && loadingAll && allCharacters.length === 0);

  return (
    <>
      {isLoading && <Loading />}
      <SearchInput onChange={handleInput} value={inputValue} placeholder="Buscar personaje..." />
      {!isLoading && (isSearching ? renderSearchView() : renderMainView())}
    </>
  );
};

export default CharactersPage;