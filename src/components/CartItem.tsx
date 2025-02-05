import type { CartItem } from "@/store/cartSlice";
import RemoveFromCartButton from "./RemoveFromCartButton";
import CartItemQuantityInput from "./CartItemQuantityInput";

export default function CartItem({ item }: { item: CartItem }) {
  return (
    <div className="flex items-center w-full py-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-26 h-26 md:w-20 md:h-20 object-cover bg-card p-2 rounded-lg"
      />
      <div className="flex items-center w-full justify-between">
        <div className="ml-4 text-left w-full">
          <p className="text-lg font-semibold capitalize">{item.name}</p>
          <div className="flex items-start md:items-center justify-between w-full flex-col md:flex-row">
            <div className="flex items-center justify-between gap-4 w-full md:w-1/2 mb-2">
              <p className="text-lg font-semibold flex flex-col text-left">
                <span className=" font-light text-muted-foreground text-sm">
                  Precio Unitario
                </span>
                ${item.price.toFixed(2)}
              </p>
              <p className="text-lg font-semibold flex flex-col text-left">
                <span className=" font-light text-sm text-muted-foreground">
                  Total Parcial
                </span>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CartItemQuantityInput item={item} />
              <RemoveFromCartButton item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
