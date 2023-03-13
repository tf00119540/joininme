import "../src/style/template.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Firstplate from "./components/common/Firstplate";
import Footer from "./components/common/Footer";

//games
import GamesMainPage from "./components/games/GamesMainPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Firstplate>
        <Routes>
          <Route path="/gamesMainPage" element={<GamesMainPage />} />
        </Routes>
      </Firstplate>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
