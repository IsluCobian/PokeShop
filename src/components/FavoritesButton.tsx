import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function FavoritesButton() {
  return (
    <Link to="/favorites">
      <Heart size={28} />
    </Link>
  );
}
