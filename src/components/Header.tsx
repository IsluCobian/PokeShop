import { Link } from "react-router-dom";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <header className=" relative flex items-center justify-center">
      <div className="flex w-full items-center justify-center p-4 text-current max-w-md ">
        <Link to="/">
          <img src="/pokeshop.webp" alt="PokéShop" className=" h-24" />
        </Link>
      </div>
      <CartButton />
    </header>
  );
}
