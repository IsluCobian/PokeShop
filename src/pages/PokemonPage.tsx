import AddToCartButton from "@/components/AddCartButton";
import AddToFavoriteButton from "@/components/AddToFavoriteButton";
import TypeBadge from "@/components/TypeBadge";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { usePokemon } from "@/hooks/usePokemon";
import { calculateBasePrice, getStatColor } from "@/lib/utils";
import { useParams } from "react-router-dom";

export default function PokemonPage() {
  let params = useParams<{ name: string }>();
  if (!params.name) return null;

  const { data, isLoading, error } = usePokemon(params.name);

  if (isLoading) return <p className="text-center">Cargando...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Error al cargar {params.name}</p>
    );
  if (!data) return null;

  return (
    <div className="relative flex flex-col items-start justify-center lg:flex-row w-full p-5 container rounded-md mx-auto">
      <div className="relative w-full lg:max-w-lg bg-card p-6 rounded-md mb-4 lg:mb-0 lg:mr-8  flex items-center justify-center aspect-square">
        <img
          src={data.sprites?.other?.["official-artwork"]?.front_default}
          alt={`Imagen de ${data.name}`}
          className="object-contain "
        />
        <AddToFavoriteButton
          pokemon={data}
          className="absolute right-2 top-2 hover:bg-slate-300"
        />
      </div>
      <div className="flex flex-col items-start w-full lg:h-full">
        <h1 className="text-3xl font-medium text-center lg:text-left  capitalize">
          {data.name}
        </h1>
        <div className="text-white capitalize flex justify-start gap-2 text-xs mt-2">
          {data.types.map((type) => (
            <TypeBadge key={type.type.name} type={type.type.name} />
          ))}
        </div>
        <div className="mt-4 w-full">
          <p className="text-lg font-semibold text-left">Stats:</p>
          {data.stats.map((stat) => (
            <div
              key={stat.stat.name}
              className="flex items-center justify-between space-x-2 mt-2 relative"
            >
              <Progress
                value={stat.base_stat}
                className={`h-5  bg-slate-200`}
                barColor={`${getStatColor(stat.stat.name)}`}
                max={255}
              />
              <span className="capitalize absolute left-1 text-white text-sm font-medium">
                {stat.stat.name}
              </span>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>
        <hr className="my-6 w-full" />
        <p className="text-3xl font-bold text-left">
          <span>$</span>
          {calculateBasePrice(data).toFixed(2)}
        </p>
        <div className="w-full flex items-end h-full">
          <AddToCartButton
            pokemon={data}
            className={`mt-4 w-full h-12 text-white font-semibold ${buttonVariants(
              { variant: "default" }
            )}`}
          />
        </div>
      </div>
    </div>
  );
}
