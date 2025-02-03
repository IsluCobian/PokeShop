import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";
import PokemonGrid from "@/components/PokemonGrid";

export default function Home() {
  return (
    <>
      <GridBackground />
      <Header title="PokéShop" />
      <PokemonGrid />
    </>
  );
}
