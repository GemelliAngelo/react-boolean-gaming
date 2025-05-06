import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function IndexPage({ games, genres }) {
  return (
    <>
      <div className="py-4">
        <h1 className="my-4">Tutti i Giochi</h1>
      </div>
      <div className="row g-5">
        {games &&
          games.map((game) => (
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
