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

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  const handleFilters = (e) => {
    setFilteredGames(games);
    setFilteredGames(() =>
      games.filter((game) => {
        game.platforms.find((platform) => platform.id == e.target.value);
      })
    );
  };

  return (
    <>
      <div className="py-4">
        <h1 className="my-4">Giochi</h1>
        <form className="d-flex justify-content-end">
          <select
            className="form-select w-auto bg-black text-white"
            name="platform"
            id="platform"
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
        </form>
      </div>
      <div className="row g-5">
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
