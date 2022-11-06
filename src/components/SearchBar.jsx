export default function SearchBar({ setSearchInput, setSearchResults, apiResponse, searchInput, searchResults }) {
  const onChangeHandler = e => {
    setSearchInput(e.target.value);
    setSearchResults(apiResponse.filter(pokemon => pokemon.name.includes(searchInput)));
  };

  return <input id='search-bar' type='text' placeholder='type to search...' value={searchInput} onChange={e => onChangeHandler(e)} />;
}
