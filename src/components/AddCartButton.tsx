import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ShoppingCart } from "lucide-react";
import { Pokemon } from "@/types/pokemon";
import { calculateBasePrice } from "@/lib/utils";

export default function AddToCartButton({ pokemon }: { pokemon: Pokemon }) {
  const dispatch = useDispatch();

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(
      addToCart({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites?.front_default,
        price: calculateBasePrice(pokemon),
        quantity: 1,
      })
    );
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="bg-primary text-white hover:bg-primary/80 flex items-center gap-2"
    >
      <ShoppingCart size={18} /> Añadir al carrito
    </Button>
  );
}
