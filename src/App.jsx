import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import List from './components/List';
import ListItem from './components/ListItem';
import { v4 as uuid } from 'uuid';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => setApiResponse(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <main id='app-container'>
      <SearchBar
        setSearchInput={setSearchInput}
        setSearchResults={setSearchResults}
        apiResponse={apiResponse}
        searchInput={searchInput}
        searchResults={searchResults}
      />
      {searchResults.length === 0 && <p>no results...</p>}
      <List>
        {!searchInput
          ? apiResponse.map(pokemon => <ListItem key={uuid()} pokemon={pokemon} />)
          : searchResults.map(pokemon => <ListItem key={uuid()} pokemon={pokemon} />)}
      </List>
    </main>
  );
}
