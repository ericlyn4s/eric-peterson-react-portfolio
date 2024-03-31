function Header() {
  return (
  <div className="nav-col container-fluid vh-100">
    <div className="row p-4 align-items-center">
        <ul className="nav flex-column">
          <li className="nav-item p-2"><a className="nav-link" href="#">About Me</a></li>
          <li className="nav-item p-2"><a className="nav-link" href="#">Portfolio</a></li>
          <li className="nav-item p-2"><a className="nav-link" href="#">Contact</a></li>
          <li className="nav-item p-2"><a className="nav-link" href="#">Resume</a></li>
        </ul>
    </div>
  </div>
  );
}

export default Header;
