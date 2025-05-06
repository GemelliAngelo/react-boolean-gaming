import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useState } from "react";

export default function Navbar({ games, setGames }) {
  const [input, setInput] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(() => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setGames(() =>
      games.filter((game) =>
        game.title.toLowerCase().includes(input.searchInput.toLowerCase())
      )
    );
    navigate("games");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="navbar-logo me-2" src={logo} alt="logo" />
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
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <form onSubmit={handleSubmit} className="w-50 text-center mx-auto">
            <div>
              <input
                onChange={handleChange}
                className="form-control"
                type="search"
                name="searchInput"
                id="searchInput"
                placeholder="Cerca un titolo o un genere"
              />
            </div>
          </form>
          <ul className="navbar-nav gap-2 text-center">
            <li className="nav-item border rounded">
              <Link
                className="nav-link text-warning"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item border rounded">
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
