import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function FavoritesButton() {
  return (
    <Link
      to="/favorites"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "relative rounded-full px-2"
      )}
    >
      <Heart size={24} />
    </Link>
  );
}
