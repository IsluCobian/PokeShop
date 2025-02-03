import { usePokemon } from "@/hooks/usePokemon";
import { calculateBasePrice, cn, getBgColor } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./AddCartButton";
import AddToFavoriteButton from "./AddToFavoriteButton";
import TypeBadge from "./TypeBadge";

export default function PokemonCard({ name }: { name: string }) {
  const { data, isLoading, error } = usePokemon(name);
  const navigate = useNavigate();

  if (isLoading) return <PokemonCardSkeleton />;
  if (error) return <p className="text-red-500">Error al cargar {name}</p>;
  if (!data) return null;

  return (
    <div
      className="p-4 rounded-md shadow-md flex flex-col items-center relative cursor-pointer bg-card"
      onClick={() => navigate(`/pokemon/${data.name}`)}
    >
      <div
        className={cn(
          "flex items-center justify-center h-6 w-12 absolute top-0 left-0 rounded-br-sm font-semibold text-white text-sm",
          getBgColor(data.types[0]?.type.name ?? "default")
        )}
      >
        #{data.id}
      </div>
      <AddToFavoriteButton pokemon={data} className="absolute top-0 right-0 " />
      <img
        src={data.sprites?.front_default}
        alt={data.name}
        className="h-24 w-24 object-contain"
      />
      <div className="flex flex-col items-start w-full">
        <div className="w-full flex justify-between items-center">
          <p className="text-lg font-medium tracking-tight capitalize">
            {data.name}
          </p>
          <p className="font-semibold text-base">
            ${calculateBasePrice(data).toFixed(2)}
          </p>
        </div>
        <div className="text-muted-foreground capitalize flex justify-start gap-2 text-xs">
          {data.types.map((type) => (
            <TypeBadge key={type.type.name} type={type.type.name} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-3">
        <AddToCartButton pokemon={data} className="w-full" />
      </div>
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
