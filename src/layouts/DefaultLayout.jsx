import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function DefaultLayout({ games, setGames }) {
  return (
    <>
      <Header games={games} setGames={setGames}></Header>
      <main className="text-bg-dark pb-5">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
