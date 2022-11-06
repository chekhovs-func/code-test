export default function SearchBar({ setSearchInput, setSearchResults, apiResponse, searchInput, searchResults }) {
  const onChangeHandler = e => {
    setSearchInput(e.target.value);
    setSearchResults(apiResponse.filter(pokemon => pokemon.name.includes(searchInput.toLowerCase())));
  };

  return (
    <input id='search-bar' className='mt-4' type='text' placeholder='type to search...' value={searchInput} onChange={e => onChangeHandler(e)} />
  );
}
