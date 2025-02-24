import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";

export default function CartButton() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [isAnimating, setIsAnimating] = useState(false);
  const [prevTotalItems, setPrevTotalItems] = useState(totalItems);

  useEffect(() => {
    if (totalItems > prevTotalItems) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }
    setPrevTotalItems(totalItems);
  }, [totalItems, prevTotalItems]);

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
        <>
          <span
            className={cn(
              "absolute -top-1 -right-1 bg-red-600 w-5 h-5 rounded-full pointer-events-none",
              isAnimating && "animate-ping"
            )}
          />
          <Badge className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full pointer-events-none">
            {totalItems}
          </Badge>
        </>
      )}
    </Link>
  );
}
