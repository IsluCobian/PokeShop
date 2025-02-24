import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function FloatingCartAlert({
  triggerAnimation,
}: {
  triggerAnimation: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Detect when the header is out of view
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;
      const headerBottom = header.getBoundingClientRect().bottom;
      setIsVisible(headerBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animation when new items are added & header is out of view
  useEffect(() => {
    if (triggerAnimation && isVisible) {
      setShouldAnimate(true);
      setTimeout(() => setShouldAnimate(false), 600);
    }
  }, [triggerAnimation, isVisible]);

  return (
    <div
      className={cn(
        "fixed z-50 bg-red-600 text-white h-10 w-10 flex items-center justify-center rounded-full opacity-0",
        shouldAnimate && "animate-bubble-up"
      )}
      style={{
        top: `${mousePosition.y - 50}px`,
        left: `${mousePosition.x}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        className={cn(
          "absolute top-0 z-[-1] bg-red-600 h-10 w-10 rounded-full pointer-events-none",
          shouldAnimate && "animate-ping"
        )}
      />
      <ShoppingCart size={24} />
    </div>
  );
}
