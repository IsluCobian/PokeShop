import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      variant={"ghost"}
      className="rounded-full px-2"
    >
      <Sun
        size={24}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={24}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
