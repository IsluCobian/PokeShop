import { History } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function HistoryButton() {
  return (
    <Link
      to="/history"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "relative px-2 rounded-full "
      )}
    >
      <History size={24} />
    </Link>
  );
}
