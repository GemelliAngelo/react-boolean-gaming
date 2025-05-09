import { createContext, useContext, useState, useEffect } from "react";

//creazione del context
const GamesContext = createContext();

//creazione del provider e anche export

export default function GamesContextProvider({ children }) {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    fetchGames();
    fetchGenres();
    fetchPlatforms();
  }, []);

  const fetchGames = () => {
    fetch(apiUrl + "games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.data);
      });
  };

  const fetchGenres = () => {
    fetch(apiUrl + "genres")
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.data);
      });
  };

  const fetchPlatforms = () => {
    fetch(apiUrl + "platforms")
      .then((res) => res.json())
      .then((data) => {
        setPlatforms(data.data);
      });
  };

  return (
    <GamesContext.Provider
      value={{
        games,
        filteredGames,
        genres,
        platforms,
        fetchGames,
        fetchGenres,
        fetchPlatforms,
        setGames,
        setGenres,
        setPlatforms,
        setFilteredGames,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}

export const useGamesContext = () => useContext(GamesContext);
