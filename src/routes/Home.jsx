import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import { Link } from 'react-router-dom';
import ListItem from '../components/ListItem';
import { v4 as uuid } from 'uuid';

export default function Home() {
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
    <section id='home-container' className='w-1/3'>
      <SearchBar
        setSearchInput={setSearchInput}
        setSearchResults={setSearchResults}
        apiResponse={apiResponse}
        searchInput={searchInput}
        searchResults={searchResults}
      />
      <List>
        {!searchInput
          ? apiResponse.map(pokemon => (
              <Link to={`/${pokemon.name}`} key={uuid()}>
                <ListItem pokemon={pokemon} />
              </Link>
            ))
          : searchResults.map(pokemon => (
              <Link to={`/${pokemon.name}`} key={uuid()}>
                <ListItem pokemon={pokemon} />
              </Link>
            ))}
      </List>
    </section>
  );
}
