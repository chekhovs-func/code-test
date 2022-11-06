import { useParams } from 'react-router-dom';

export default function Detail() {
  const { pokemonName } = useParams();

  return <p>{pokemonName}</p>;
}
