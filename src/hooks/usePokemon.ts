import { Pokemon } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

interface PokemonListResponse {
  count: number;
  results: {
    name: string;
    types: {
      type: {
        name: string;
      };
    }[];
    url: string;
  }[];
}

interface PokemonResponse {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  url: string;
}

const fetchPokemonList = async (): Promise<PokemonListResponse> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0`
  );
  if (!response.ok) throw new Error("Error al obtener Pokémon");
  const data = await response.json();

  // Agregar los tipos de cada Pokémon
  const detailedPokemonList = await Promise.all(
    data.results.map(async (pokemon: PokemonResponse) => {
      const pokemonDetailsResponse = await fetch(pokemon.url);
      if (!pokemonDetailsResponse.ok)
        throw new Error(`Error al obtener detalles de ${pokemon.name}`);
      const pokemonDetails = await pokemonDetailsResponse.json();

      return { ...pokemon, types: pokemonDetails.types };
    })
  );
  return { count: detailedPokemonList.length, results: detailedPokemonList };
};

const fetchPokemon = async (pokemonName: string): Promise<Pokemon> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  if (!response.ok) throw new Error("Error al obtener Pokémon");
  return response.json();
};

export const usePokemon = (pokemonName: string) => {
  return useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: () => fetchPokemon(pokemonName),
    staleTime: 1000 * 60 * 5, // 5 minutos de caché
  });
};

export const usePokemonList = () => {
  return useQuery({
    queryKey: ["pokemon"],
    queryFn: () => fetchPokemonList(),
    staleTime: 1000 * 60 * 5, // 5 minutos de caché
  });
};
