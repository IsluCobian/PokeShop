import CartItem from "@/components/CartItem";
import CheckoutModal from "@/components/CheckoutModal";
import ClearCartButton from "@/components/ClearCartButton";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const [open, setOpen] = useState(false);

  const typeMultipliers: Record<string, number> = {
    legendary: 2.5,
    dragon: 1.8,
    ghost: 1.6,
    psychic: 1.5,
    normal: 1.0,
    default: 1.1, // Otros tipos
  };

  const typeDiscounts: Record<string, number> = {
    fire: 0.1,
    water: 0.15,
    grass: 0.12,
  };

  const subtotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalWithMultipliers = cart.items.reduce((total, item) => {
    const highestMultiplier = item.types
      .map((type) => typeMultipliers[type] ?? typeMultipliers.default)
      .reduce((max, multiplier) => Math.max(max, multiplier), 1.0);

    return total + item.price * item.quantity * highestMultiplier;
  }, 0);

  // Calcular los descuentos aplicados y registrarlos para mostrar en la UI
  let discountBreakdown: { type: string; amount: number }[] = [];

  const totalDiscount = cart.items.reduce((total, item) => {
    const highestDiscountType = item.types.find(
      (type) => typeDiscounts[type] !== undefined
    );
    if (highestDiscountType) {
      const discountAmount =
        item.price * item.quantity * typeDiscounts[highestDiscountType];

      discountBreakdown.push({
        type:
          typeDiscounts[highestDiscountType] * 100 +
          "% - " +
          highestDiscountType,
        amount: discountAmount,
      });

      return total + discountAmount;
    }
    return total;
  }, 0);

  const totalToPay = totalWithMultipliers - totalDiscount;

  const handleCheckout = () => {
    if (totalToPay === 0) {
      return;
    }
    setOpen(true);
    dispatch({ type: "cart/clearCart" });
  };

  const onOpenChange = () => {
    setOpen(false);
  };

  return (
    <div className="relative flex flex-col items-start justify-center w-full h-full lg:flex-row gap-2">
      <div className="flex flex-col w-full p-4 pt-0">
        <div className="flex w-full justify-between items-center text-2xl font-semibold tracking-tight mb-2">
          Pokemones
          <ClearCartButton />
        </div>
        <hr />
        {cart.items.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className="flex flex-col p-5 min-w-48 justify-start items-start bg-card rounded-md shadow-md w-full lg:max-w-sm h-full space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Resumen</h2>
        <div className="inline-flex justify-between w-full text-muted-foreground">
          <span>Total parcial</span>
          <p className="font-medium text-current">${subtotal.toFixed(2)}</p>
        </div>
        <div className="inline-flex justify-between w-full text-muted-foreground">
          <span>Multiplicadores</span>
          <p className="font-medium text-current">
            +${(totalWithMultipliers - subtotal).toFixed(2)}
          </p>
        </div>
        {discountBreakdown.length > 0 && (
          <div className="text-left">
            Descuentos
            {discountBreakdown.map((discount, index) => (
              <div
                key={index}
                className="inline-flex justify-between w-full text-muted-foreground"
              >
                <span>{discount.type.toUpperCase()}</span>
                <p className="font-medium text-current">
                  -${discount.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className=" inline-flex justify-between w-full">
          <span>Total a Pagar</span>
          <p className="text-xl font-medium">${totalToPay.toFixed(2)}</p>
        </div>
        <Button className="w-full" onClick={handleCheckout}>
          Finalizar Pedido
        </Button>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => navigate("/")}
        >
          Seguir Comprando
        </Button>
      </div>
      <CheckoutModal open={open} onOpenChange={onOpenChange} />
    </div>
  );
}
