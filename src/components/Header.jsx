import { Link } from 'react-router-dom';
import headshot from '../assets/eric_headshot.jpg';


function Header() {
  return (
  <header>
    <img id='headshot' src={headshot}/>
    <nav>
      <Link className="nav-link" href="/">ABOUT ME</Link>
      <Link className="nav-link" href="/portfolio">PORTFOLIO</Link>
      <Link className="nav-link" href="/contact">CONTACT</Link>
      <Link className="nav-link" href="/resume">RESUME</Link>
    </nav>
  </header>
  );
}

export default Header;
