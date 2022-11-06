import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

export default function App() {
  return (
    <main id='app-container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:pokemonName' element={<Detail />} />
      </Routes>
    </main>
  );
}
