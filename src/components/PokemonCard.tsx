import { usePokemon } from "@/hooks/usePokemon";
import { calculateBasePrice, cn, getBgColor } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import AddToCartButton from "./AddCartButton";

export default function PokemonCard({ name }: { name: string }) {
  const { data, isLoading, error } = usePokemon(name);
  const location = useLocation();

  if (isLoading) return <PokemonCardSkeleton />;
  if (error) return <p className="text-red-500">Error al cargar {name}</p>;
  if (!data) return null;

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center relative">
      <div
        className={cn(
          "flex items-center justify-center h-6 w-12 absolute top-0 left-0 rounded-br-sm font-semibold text-white text-sm",
          getBgColor(data.types[0]?.type.name ?? "default")
        )}
      >
        #{data.id}
      </div>
      <Link
        to={`/pokemon/${data.name}`}
        state={{ background: location }}
        className="flex flex-col items-center"
      >
        <img
          src={data.sprites?.front_default}
          alt={data.name}
          className="h-20 w-20 object-contain"
        />
        <p className="text-xl font-semibold tracking-tight capitalize">
          {data.name}
        </p>
      </Link>

      <div className="text-sm text-muted-foreground capitalize">
        {data.types.map((type) => type.type.name).join(", ")}
      </div>

      <p className="font-medium text-lg">
        💰 {calculateBasePrice(data).toFixed(2)} PokeCoins
      </p>
      <AddToCartButton pokemon={data} />
    </div>
  );
}

function PokemonCardSkeleton() {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md animate-pulse flex flex-col items-center">
      <div className="w-20 h-20 bg-gray-300 rounded-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded-md w-24 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded-md w-16"></div>
    </div>
  );
}
