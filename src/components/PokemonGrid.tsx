import { usePokemonList } from "@/hooks/usePokemon";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react/jsx-runtime";
import PaginationControls from "./PaginationControls";
import PokemonCard, { PokemonCardSkeleton } from "./PokemonCard";
import TypesFilterSelector from "./TypesFilterSelector";

const ITEMS_PER_PAGE = 20;

interface Pokemon {
  name: string;
  types: { type: { name: string } }[];
  url: string;
}

export default function PokemonGrid() {
  const page = useSelector((state: RootState) => state.pagination.page);
  const { data, isLoading } = usePokemonList();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeChange = (types: string[]) => {
    setSelectedTypes(types);
  };

  useEffect(() => {
    if (!data?.results) return;

    let filtered = data.results;

    // Filtrar por nombre
    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }

    // Filtrar por tipo si hay uno seleccionado
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((pokemon) =>
        selectedTypes.every((selectedType) =>
          pokemon.types.some((type) => type.type.name === selectedType)
        )
      );
    }

    setFilteredPokemon(filtered);
  }, [data, searchTerm, selectedTypes]);

  const paginatedPokemon = filteredPokemon.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-5 relative">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 p-2 border border-border bg-card rounded-md"
        />
      </div>
      <TypesFilterSelector onChange={handleTypeChange} className="my-4" />
      {isLoading && <PokemonGridSkeleton />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
        {paginatedPokemon.map((pokemon) => (
          <Fragment key={pokemon.name}>
            <PokemonCard name={pokemon.name} />
          </Fragment>
        ))}
      </div>
      <PaginationControls totalItems={filteredPokemon.length ?? 0} />
    </div>
  );
}

function PokemonGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
      {[...Array(20)].map((_, index) => (
        <Fragment key={index}>
          <PokemonCardSkeleton />
        </Fragment>
      ))}
    </div>
  );
}
