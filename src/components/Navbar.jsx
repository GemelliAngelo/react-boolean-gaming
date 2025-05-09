import { useGamesContext } from "../contexts/GamesContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useState } from "react";

export default function Navbar() {
  const { games, fetchGames, setGames, filteredGames, setFilteredGames } =
    useGamesContext();
  const defaultInput = {
    searchInput: "",
  };
  const [input, setInput] = useState(defaultInput);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(() => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.searchInput) {
      setFilteredGames(() =>
        games.filter(
          (game) =>
            game.title
              .toLowerCase()
              .includes(input.searchInput.toLowerCase()) ||
            game.genre.name
              .toLowerCase()
              .includes(input.searchInput.toLowerCase())
        )
      );

      navigate("games");
      setInput(defaultInput);
    } else {
      fetchGames();
    }
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
                value={input.searchInput}
              />
            </div>
          </form>
          <ul className="navbar-nav gap-2 text-center">
            <li className="nav-item border rounded">
              <Link className="nav-link text-warning" to="/">
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
