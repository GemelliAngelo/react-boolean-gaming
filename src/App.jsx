import { useEffect, useState } from "react";
import "./assets/css/App.css";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {games &&
          games.map((game) => (
            <div key={game.id} className="col-4">
              <div className="card">
                <img
                  src={`/img/${game.cover_url}`}
                  alt={`cover-${game.title}`}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
