import CartItem from "@/components/CartItem";
import ClearCartButton from "@/components/ClearCartButton";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart);
  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.price, 0);
  };
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full lg:flex-row">
      <div className="flex flex-col w-full p-4">
        <div>Cart Page</div>
        <div className="flex w-full justify-between items-center text-2xl font-semibold tracking-tight mb-2">
          Pokemones
          <ClearCartButton />
        </div>
        <hr />
        {cart.items.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className="flex flex-col p-4 min-w-48 justify-start items-start bg-card rounded-md shadow-md">
        <h2 className="text-2xl font-semibold tracking-tight">Resumen</h2>
        <div>
          <p>Total: ${calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
}
