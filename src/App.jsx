import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './components/List';
import ListItem from './components/ListItem';
import { v4 as uuid } from 'uuid';

export default function App() {
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(res => setData(res.data.results))
      .catch(err => console.error(err));
  }, []);

  const [data, setData] = useState([]);

  return (
    <main id='app-container'>
      <List>
        {data.map(pokemon => (
          <ListItem key={uuid()} pokemon={pokemon} />
        ))}
      </List>
    </main>
  );
}
