import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout({ games, setGames }) {
  return (
    <>
      <Header games={games} setGames={setGames}></Header>
      <main className="text-bg-dark pb-5">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="bg-black"></footer>
    </>
  );
}
