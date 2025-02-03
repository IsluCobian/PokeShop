import { CartItem } from "@/store/cartSlice";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";

export default function RemoveFromCartButton({ item }: { item: CartItem }) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "cart/removeFromCart", payload: item.id });
  };

  return (
    <Button onClick={handleRemoveFromCart} variant="ghost" size="icon">
      <Trash2 size={18} />
    </Button>
  );
}
