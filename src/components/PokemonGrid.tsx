import { usePokemonList } from "@/hooks/usePokemon";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import PaginationControls from "./PaginationControls";
import PokemonCard from "./PokemonCard";
import { Fragment } from "react/jsx-runtime";

export default function PokemonGrid() {
  const page = useSelector((state: RootState) => state.pagination.page);
  const { data, isLoading, error } = usePokemonList(page);

  return (
    <div className="container mx-auto p-5 relative">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
        {data?.results.map((pokemon) => (
          <Fragment key={pokemon.name}>
            <PokemonCard url={pokemon.url} />
          </Fragment>
        ))}
      </div>
      <PaginationControls totalItems={data?.count ?? 0} />
    </div>
  );
}
