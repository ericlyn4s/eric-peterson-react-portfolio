function Header() {
  return (
  <div className="container-fluid">
    <div className="row vh-100">
      <div className="header-col col-sm-3 col-md-2">
        <ul className="nav flex-column">
          <li className="nav-item p-2"><a className="nav-link" href="#">About Me</a></li>
          <li className="nav-item p-2"><a className="nav-link" href="#">Portfolio</a></li>
          <li className="nav-item p-2"><a className="nav-link" href="#">Contact</a></li>
          <li className="nav-item p-2"><a className="nav-link" href="#">Resume</a></li>
        </ul>
      </div>
    </div>
    <div className="row vh-30">
      // footer goes here
    </div>
  </div>
  );
}

export default Header;
