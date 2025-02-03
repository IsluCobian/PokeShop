import type { CartItem } from "@/store/cartSlice";
import RemoveFromCartButton from "./RemoveFromCartButton";

export default function CartItem({ item }: { item: CartItem }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="ml-4">
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-sm text-gray-500">
            {item.price.toFixed(2)} x {item.quantity}
          </p>
        </div>
      </div>
      <p className="text-lg font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
      <RemoveFromCartButton item={item} />
    </div>
  );
}
