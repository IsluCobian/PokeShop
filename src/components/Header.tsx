import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import FavoritesButton from "./FavoritesButton";

export default function Header() {
  return (
    <header className=" relative flex items-center justify-center">
      <div className="flex w-full items-center justify-center p-4 text-current max-w-md ">
        <Link to="/">
          <img src="/pokeshop.webp" alt="PokéShop" className=" h-24" />
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-4">
        <CartButton />
        <FavoritesButton />
      </nav>
    </header>
  );
}
