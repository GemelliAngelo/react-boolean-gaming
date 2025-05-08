import { Link, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function HomePage({ games, setGames, genres }) {
  let num1 = Math.floor(Math.random() * (genres.length + 1) + 1);
  let num2 = Math.floor(Math.random() * (genres.length + 1) + 1);
  let num3 = Math.floor(Math.random() * (genres.length + 1) + 1);

  const navigate = useNavigate();

  const handleGenresFilter = (genre) => {
    setGames(() => games.filter((game) => game.genre.name == genre.name));
    navigate("games");
  };

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
      <div className="row g-4">
        <div className="col-12">
          <h2 className="my-3">Categorie più Ricercate</h2>
        </div>
        {genres &&
          genres
            .filter(
              (genre) =>
                genre.id == num1 || genre.id == num2 || genre.id == num3
            )
            .map((genre, index) => (
              <div key={genre.id} className="col-12 col-md-4 text-center">
                <button
                  className={`btn btn-lg btn-custom-${index} bg-gradient w-100`}
                  onClick={() => handleGenresFilter(genre)}
                >
                  {genre.name}
                </button>
              </div>
            ))}
      </div>
    </>
  );
}
