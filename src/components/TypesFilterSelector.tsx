import { cn, getBgColor, getBorderColor, getStateOnColor } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useState } from "react";

const POKEMON_TYPES = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export default function TypesFilterSelector({
  onChange,
  className,
}: {
  onChange: (types: string[]) => void;
  className?: string;
}) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleToggleChange = (newTypes: string[]) => {
    setSelectedTypes(newTypes);
    onChange(newTypes);
  };
  return (
    <ToggleGroup
      type="multiple"
      value={selectedTypes}
      onValueChange={handleToggleChange}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {POKEMON_TYPES.map((type) => {
        const borderColor = getBorderColor(type);
        const stateOnColor = getStateOnColor(type);
        return (
          <ToggleGroupItem
            key={type}
            value={type}
            className={`capitalize text-xs font-normal rounded-full py-0.5 h-6 border text-current ${borderColor} ${stateOnColor}`}
          >
            {type}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
