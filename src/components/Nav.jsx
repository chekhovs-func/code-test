import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav id='nav-container'>
      <Link to='/'>
        <button id='nav-content' className='border border-neutral-500 p-2'>home</button>
      </Link>
    </nav>
  );
}
