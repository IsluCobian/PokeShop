import { usePokemon } from "@/hooks/usePokemon";

export default function PokemonCard({ url }: { url: string }) {
  const { data, isLoading, error } = usePokemon(url);

  if (isLoading) return <PokemonCardSkeleton />;

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <img src={data?.sprites.front_default} alt={data?.name} />
      {data?.name}
    </div>
  );
}

function PokemonCardSkeleton() {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md animate-pulse">
      <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
      <div className="h-4 bg-gray-300 rounded-md"></div>
    </div>
  );
}
