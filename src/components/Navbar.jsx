import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="navbar-logo me-2"
            src="src/assets/img/logo.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item border-end">
              <Link
                className="nav-link text-warning"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/games">
                Giochi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
