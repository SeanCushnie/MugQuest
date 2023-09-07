import {Link} from 'react-router-dom';
import Auth from './Auth';


const NavBar = () => {
  return (
    <nav className='nav'>
        <Link className='nav-button' to='/'>HOME</Link>
        <Link className='nav-button' to='/new'>NEW GAME</Link>
        <button className="nav-button">LOAD GAME</button>
        <button className="nav-button">SAVE</button>
        <button className="nav-button" >LOG OUT</button>

    </nav>
  )
}

export default NavBar