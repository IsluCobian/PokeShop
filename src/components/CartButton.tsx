import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function CartButton() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart size={28} />
      {totalItems > 0 && (
        <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full pointer-events-none">
          {totalItems}
        </Badge>
      )}
    </Link>
  );
}
