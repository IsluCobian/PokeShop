import PokemonCard from "@/components/PokemonCard";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites);
  return (
    <div className="container mx-auto p-5 relative">
      <h1 className="text-2xl font-bold text-left">Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
        {favorites.favorites.map((favorite) => (
          <PokemonCard key={favorite} name={favorite} />
        ))}
      </div>
      {favorites.favorites.length === 0 && (
        <p className="text-gray-500">You have no favorites yet.</p>
      )}
    </div>
  );
}
