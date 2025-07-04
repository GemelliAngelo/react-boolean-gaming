import { useGamesContext } from "../contexts/GamesContext";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useMemo } from "react";
import Card from "../components/Card";

export default function HomePage() {
  const { games, genres, filteredGames, setFilteredGames } = useGamesContext();

  let num1 = Math.floor(Math.random() * (genres.length + 1) + 1);
  let num2 = Math.floor(Math.random() * (genres.length + 1) + 1);
  let num3 = Math.floor(Math.random() * (genres.length + 1) + 1);

  const navigate = useNavigate();

  const handleGenresFilter = (genre) => {
    const filtered = games.filter((game) => game.genre?.name === genre.name);
    setFilteredGames(filtered);

    if (filtered.length) {
      navigate("games");
    }
  };

  const randomGenres = useMemo(() => {
    if (!genres || genres.length < 3) return [];

    const shuffled = [...genres].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [genres]);

  return (
    <>
      <div className="text-center py-4 mb-4">
        <img
          className="logo-title"
          src="src/assets/img/logo-small-transparent.png"
          alt="logo"
        />
        <h1 className="d-inline align-middle">BOOLEAN GAMING</h1>
      </div>
      <Carousel games={games} />
      <hr />
      <div className="row g-4 py-5">
        <div className="col-12">
          <h2 className="my-3 text-center">CATEGORIE PIÙ RICERCATE</h2>
        </div>
        {randomGenres.map((genre, index) => (
          <div key={genre.id} className="col-12 col-md-4 text-center">
            <button
              className={`btn btn-custom-${index} btn-lg bg-gradient w-100 py-4`}
              onClick={() => handleGenresFilter(genre)}
            >
              {genre.name}
            </button>
          </div>
        ))}
      </div>
      <hr />
      <div className="row justify-content-center g-4 py-5">
        <div className="col-12">
          <h2 className="my-3 text-center">HALL OF FAME</h2>
        </div>
        {[...games]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4)
          .map((game) => (
            <div key={game.id} className="col-7">
              <Link
                className="link-underline link-underline-opacity-0"
                to={`/games/${game.id}`}
              >
                <Card game={game} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
