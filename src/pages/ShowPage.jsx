import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPage() {
  const [game, setGame] = useState();

  fetch("http://127.0.0.1:8000/api/games/" + useParams().id)
    .then((res) => res.json())
    .then((data) => setGame(data.data));

  return <>{game && <img src={"img/" + game.cover_url} alt="Cover" />}</>;
}
