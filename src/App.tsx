import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import PokemonModal from "./components/PokemonModal";
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

function App() {
  const location = useLocation();
  const background = location.state?.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:name" element={<PokemonPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="pokemon/:name" element={<PokemonModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
