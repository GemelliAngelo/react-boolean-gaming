import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data.data));
  }, []);

  return (
    <div className="row g-5">
      {games &&
        games.map((game) => (
          <div key={game.id} className="col-12 col-md-6 col-xxl-4">
            <Card game={game} />
          </div>
        ))}
    </div>
  );
}
