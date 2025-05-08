import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ShowPage() {
  const [game, setGame] = useState();

  const apiUrl = import.meta.env.VITE_API_URL;

  const { id } = useParams();

  useEffect(() => {
    fetch(apiUrl + "games/" + id)
      .then((res) => res.json())
      .then((data) => setGame(data.data));
  }, [id]);

  return (
    game && (
      <>
        <div className="py-4">
          <h1 className="my-4">{game.title}</h1>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-center gap-2">
          <img
            className="img-fluid w-100 rounded"
            src={"/img/" + game.cover_url}
            alt={"cover " + game.title}
          />
          <div className="d-flex flex-column justify-content-between align-items-center bg-black w-auto py-3 gap-2 rounded">
            <h5 className="text-center">
              {game.publisher} / {game.developer}
            </h5>
            {game.genre && <span>{game.genre.name}</span>}
            <div className="text-center">
              {game.platforms.map((platform) => {
                return (
                  <span
                    key={platform.id}
                    className="badge rounded-pill me-1"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.name}
                  </span>
                );
              })}
            </div>
            <span className="fs-5">
              <i className="fa-solid fa-star me-2"></i>
              {game.rating}
            </span>
            <p className="text-center mx-4">{game.description}</p>
            <span className="card-subtitle badge text-bg-light fs-6 my-3">
              {String.fromCharCode(8364)} {game.price}
            </span>

            <small>{game.release_date}</small>
          </div>
        </div>
        <div className="py-3">
          <Link
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            to={-1}
          >
            {String.fromCharCode(8676)} Torna a tutti i giochi
          </Link>
        </div>
      </>
    )
  );
}
