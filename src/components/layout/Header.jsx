import Navbar from "../Navbar";

export default function Header({ games, setGames }) {
  return (
    <header className="sticky-top">
      <Navbar games={games} setGames={setGames} />
    </header>
  );
}
