import { toggleFavorite } from "@/store/favoritesSlice";
import { RootState } from "@/store/store";
import { Pokemon } from "@/types/pokemon";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";

export default function AddToFavoriteButton({ pokemon }: { pokemon: Pokemon }) {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.includes(pokemon.name);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFavorite(pokemon.name));
  };
  return (
    <Button
      className=""
      onClick={handleToggleFavorite}
      variant="ghost"
      size="icon"
    >
      <Heart
        size={18}
        className={isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}
      />
    </Button>
  );
}
