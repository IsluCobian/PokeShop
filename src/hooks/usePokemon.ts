import { useQuery } from "@tanstack/react-query";

const fetchPokemon = async (page: number) => {
  const limit = 20;
  const offset = (page - 1) * limit;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) throw new Error("Error al obtener Pokémon");
  return response.json();
};

export const usePokemon = (page: number) => {
  return useQuery({
    queryKey: ["pokemon", page],
    queryFn: () => fetchPokemon(page),
    staleTime: 1000 * 60 * 5, // 5 minutos de caché
  });
};
