import { usePokemon } from "@/hooks/usePokemon";
import { useParams } from "react-router-dom";

export default function PokemonPage() {
  let params = useParams<{ name: string }>();
  if (!params.name) return null;
  const { data, isLoading, error } = usePokemon(params.name);
  return <div>{data?.name}</div>;
}
