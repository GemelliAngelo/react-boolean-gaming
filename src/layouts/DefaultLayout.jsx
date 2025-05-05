import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main className="text-bg-dark h-100 pb-5">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
}
