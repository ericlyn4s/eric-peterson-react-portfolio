import headshot from '../assets/eric_headshot.jpg';


function Header() {
  return (
  <header>
    <img id='headshot' src={headshot}/>
    <nav>
      <a className="nav-link" href="#">ABOUT ME</a>
      <a className="nav-link" href="#">PORTFOLIO</a>
      <a className="nav-link" href="#">CONTACT</a>
      <a className="nav-link" href="#">RESUME</a>
    </nav>
  </header>
  );
}

export default Header;
