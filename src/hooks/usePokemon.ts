import { Pokemon } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

interface PokemonListResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

const fetchPokemonList = async (page: number): Promise<PokemonListResponse> => {
  const limit = 20;
  const offset = (page - 1) * limit;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) throw new Error("Error al obtener Pokémon");
  return response.json();
};

const fetchPokemon = async (pokemonUrl: string): Promise<Pokemon> => {
  const response = await fetch(pokemonUrl);
  if (!response.ok) throw new Error("Error al obtener Pokémon");
  return response.json();
};

export const usePokemon = (pokemonUrl: string) => {
  return useQuery({
    queryKey: ["pokemon", pokemonUrl],
    queryFn: () => fetchPokemon(pokemonUrl),
    staleTime: 1000 * 60 * 5, // 5 minutos de caché
  });
};

export const usePokemonList = (page: number) => {
  return useQuery({
    queryKey: ["pokemon", page],
    queryFn: () => fetchPokemonList(page),
    staleTime: 1000 * 60 * 5, // 5 minutos de caché
  });
};
