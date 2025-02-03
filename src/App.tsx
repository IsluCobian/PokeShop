import "./App.css";
import GridBackground from "./components/GridBackground";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  return (
    <>
      <GridBackground />
      <Header title="PokéShop" />
      <PokemonGrid />
    </>
  );
}

export default App;
