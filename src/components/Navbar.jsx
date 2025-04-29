export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          <img
            className="navbar-logo me-2"
            src="src/assets/img/logo.png"
            alt="logo"
          />
        </a>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
