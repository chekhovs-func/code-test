import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:pokemonName' element={<Detail />} />
    </Routes>
  );
}
