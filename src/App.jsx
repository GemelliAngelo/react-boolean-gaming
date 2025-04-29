import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./assets/css/App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data.data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage games={games} />} />
          <Route path="games" element={<IndexPage games={games} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
