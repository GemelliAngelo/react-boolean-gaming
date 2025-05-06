import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./assets/css/App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";
import ShowPage from "./pages/ShowPage";

function App() {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(apiUrl + "games")
      .then((res) => res.json())
      .then((data) => setGames(data.data));
  }, []);

  useEffect(() => {
    fetch(apiUrl + "genres")
      .then((res) => res.json())
      .then((data) => setGenres(data.data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout games={games} setGames={setGames} />}
        >
          <Route index element={<HomePage games={games} genres={genres} />} />
          <Route path="games">
            <Route
              index
              element={<IndexPage games={games} genres={genres} />}
            />
            <Route path=":id" element={<ShowPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
