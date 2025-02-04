import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function CartButton() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      to="/cart"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "relative rounded-full px-3"
      )}
    >
      <ShoppingCart size={24} />
      {totalItems > 0 && (
        <Badge className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full pointer-events-none">
          {totalItems}
        </Badge>
      )}
    </Link>
  );
}
