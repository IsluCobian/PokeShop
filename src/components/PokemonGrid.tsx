import { usePokemon } from "@/hooks/usePokemon";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import PaginationControls from "./PaginationControls";
import { Pokemon } from "@/types/pokemon";

export default function PokemonGrid() {
  const page = useSelector((state: RootState) => state.pagination.page);
  const { data, isLoading, error } = usePokemon(page);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Pokémon</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
        {data?.results.map((pokemon: Pokemon) => (
          <div
            key={pokemon.name}
            className="bg-gray-100 p-4 rounded-md shadow-md"
          >
            <p className="text-xl font-bold">{pokemon.name}</p>
          </div>
        ))}
      </div>
      <PaginationControls totalItems={data?.count} />
    </div>
  );
}
