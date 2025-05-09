import { useGamesContext } from "../contexts/GamesContext";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useEffect } from "react";

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
    if (!filteredGames.length) {
      setFilteredGames(games);
    }
  }, [filteredGames, games]);

  const handleFilters = (e) => {
    const selectedId = Number(e.target.value);
    setFilteredGames(() =>
      games.filter((game) =>
        game.platforms.some((platform) => platform.id === selectedId)
      )
    );
  };

  return (
    <>
      <div className="text-center pt-4">
        <h1 className="mb-4">Giochi</h1>
        <form className="d-flex justify-content-center gap-3 border rounded p-3">
          <select
            className="form-select text-center bg-black text-white"
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
          <select
            name="rating"
            id="rating"
            className="form-select text-center bg-black text-white"
            defaultValue="default"
          >
            <option value="default">Filtra per Valutazione</option>
            <option className="fa-solid fa-star" value="2">
              &#x2605; 1-2
            </option>
            <option className="fa-solid fa-star" value="4">
              &#x2605; 3-4
            </option>
            <option className="fa-solid fa-star" value="6">
              &#x2605; 5-6
            </option>
            <option className="fa-solid fa-star" value="8">
              &#x2605; 7-8
            </option>
            <option className="fa-solid fa-star" value="10">
              &#x2605; 9-10
            </option>
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
