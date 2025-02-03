import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ShoppingCart } from "lucide-react";
import { Pokemon } from "@/types/pokemon";
import { calculateBasePrice, cn } from "@/lib/utils";

export default function AddToCartButton({
  pokemon,
  className,
}: {
  pokemon: Pokemon;
  className?: string;
}) {
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
      size="sm"
      variant="outline"
      className={cn("bg-transparent", className)}
    >
      <ShoppingCart size={18} /> Añadir al carrito
    </Button>
  );
}
