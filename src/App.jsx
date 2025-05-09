import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";
import ShowPage from "./pages/ShowPage";
import GamesContextProvider from "./contexts/GamesContext";

function App() {
  return (
    <GamesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="games">
              <Route index element={<IndexPage />} />
              <Route path=":id" element={<ShowPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GamesContextProvider>
  );
}

export default App;
