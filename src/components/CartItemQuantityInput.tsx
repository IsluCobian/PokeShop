import { CartItem, updateQuantity } from "@/store/cartSlice";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";

export default function CartItemQuantityInput({ item }: { item: CartItem }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div className="flex items-center bg-white p-0.5 rounded-md">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={handleDecrease}
        disabled={item.quantity <= 1}
      >
        <Minus size={16} />
      </Button>
      <input
        type="number"
        value={item.quantity}
        className="w-8 h-8 text-center border-none text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <Button variant={"ghost"} size={"icon"} onClick={handleIncrease}>
        <Plus size={16} />
      </Button>
    </div>
  );
}
