import { useGamesContext } from "../contexts/GamesContext";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const {
    games,
    filteredGames,
    genres,
    platforms,
    setGames,
    setFilteredGames,
    setGenres,
    setPlatforms,
  } = useGamesContext();

  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (!filteredGames.length) {
      setFilteredGames(games);
    }
  }, [filteredGames, games]);

  const handleFilters = (e) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilters);

    setFilteredGames(() =>
      games.filter(
        (game) =>
          game.platforms.some(
            (platform) => platform.id === Number(newFilters.platforms)
          ) || Number(game.price) <= Number(newFilters.price)
      )
    );
  };

  return (
    <>
      <div className="text-center pt-4">
        <h1 className="mb-4 text-decoration-underline">Giochi</h1>
        <form className="d-flex flex-column flex-sm-row justify-content-center gap-3 border rounded p-3">
          <select
            className="form-select text-center bg-black text-white"
            name="platforms"
            id="platforms"
            defaultValue="default"
            onChange={handleFilters}
          >
            <option value="default">Filtra per Piattaforma</option>
            {platforms &&
              platforms.map((platform) => (
                <option
                  key={platform.id}
                  value={platform.id}
                  style={{ color: platform.color }}
                >
                  {platform.name}
                </option>
              ))}
          </select>
          <select
            name="price"
            id="price"
            className="form-select text-center bg-black text-white"
            defaultValue="default"
            onChange={handleFilters}
          >
            <option value="default">Filtra per Prezzo</option>
            <option value="0">Free-to-play</option>
            <option value="20">Fino a 20 &#8364;</option>
            <option value="40">Fino a 40 &#8364;</option>
            <option value="60">Fino a 60 &#8364;</option>
            <option value="80">Fino a 80 &#8364;</option>
            <option value="100">Fino a 100 &#8364;</option>
          </select>
        </form>
      </div>
      <div className="row g-5 pt-4">
        {filteredGames &&
          filteredGames.map((game) => (
            <div key={game.id} className="col-12 col-md-6 col-xxl-4">
              <Link
                className="link-underline link-underline-opacity-0"
                to={`${game.id}`}
              >
                <Card game={game} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
