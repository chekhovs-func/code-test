export default function ListItem({ pokemon }) {
  return (
    <li id='list-content' className='hover:underline'>
      {pokemon.name}
    </li>
  );
}
