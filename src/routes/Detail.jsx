import { useParams } from 'react-router-dom';

export default function Detail() {
  const { pokemonName } = useParams();

  return <p className='mt-4'>{pokemonName}</p>;
}
