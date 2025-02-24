import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import FavoritesButton from "./FavoritesButton";
import HistoryButton from "./HistoryButton";
import ModeToggle from "./ModeToggle";

export default function Header() {
  return (
    <header
      id="header"
      className=" relative flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between container mx-auto"
    >
      <Link to="/">
        <img
          src="pokeshop.webp"
          alt="PokéShop"
          className="h-16 lg:h-20 object-contain max-w-md md:ml-2"
        />
      </Link>

      <nav className="flex items-center justify-center gap-4">
        <CartButton />
        <FavoritesButton />
        <HistoryButton />
        <ModeToggle />
      </nav>
    </header>
  );
}
