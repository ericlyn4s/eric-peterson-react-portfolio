// Importing the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';
// Importing the headshot image from the assets directory
import headshot from '../assets/eric_headshot.jpg';


function Header() {
  return (
  <header>
    <img id='headshot' src={headshot}/>
    <nav>
      <Link className="nav-link" to="/">ABOUT ME</Link>
      <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
      <Link className="nav-link" to="/contact">CONTACT</Link>
      <Link className="nav-link" to="/resume">RESUME</Link>
    </nav>
  </header>
  );
}

export default Header;
