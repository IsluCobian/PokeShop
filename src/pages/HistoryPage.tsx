import PokemonCard from "@/components/PokemonCard";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function HistoryPage() {
  const history = useSelector((state: RootState) => state.history);
  return (
    <div className="container mx-auto p-5 relative space-y-2">
      <h1 className="text-2xl font-bold text-left">Historial</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
        {history.history.map((favorite) => (
          <PokemonCard key={favorite} name={favorite} />
        ))}
      </div>
      {history.history.length === 0 && (
        <p className="text-gray-500">You have no history yet.</p>
      )}
    </div>
  );
}
