import { useDispatch } from "react-redux";
import { Button } from "./ui/button";

export default function ClearCartButton() {
  const dispatch = useDispatch();
  const handleClearCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "cart/clearCart" });
  };

  return (
    <Button
      onClick={handleClearCart}
      className="text-red-500"
      variant={"outline"}
    >
      Vaciar carrito
    </Button>
  );
}
