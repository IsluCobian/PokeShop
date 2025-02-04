import { Pokemon } from "@/types/pokemon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const bgcolors = {
  fire: "bg-fire",
  water: "bg-water",
  grass: "bg-grass",
  electric: "bg-electric",
  psychic: "bg-psychic",
  ice: "bg-ice",
  dragon: "bg-dragon",
  dark: "bg-dark",
  fairy: "bg-fairy",
  normal: "bg-normal",
  fighting: "bg-fighting",
  flying: "bg-flying",
  poison: "bg-poison",
  ground: "bg-ground",
  rock: "bg-rock",
  bug: "bg-bug",
  ghost: "bg-ghost",
  steel: "bg-steel",
} as const;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBgColor(type: string) {
  return bgcolors[type as keyof typeof bgcolors];
}

export const calculateBasePrice = (pokemon: Pokemon) => {
  if (!pokemon || !pokemon.stats) return 0;

  const statMap: Record<string, number> = {
    hp: 1.0,
    attack: 1.5,
    defense: 1.2,
    "special-attack": 1.8,
    "special-defense": 1.4,
    speed: 1.3,
  };

  const basePrice = pokemon.stats.reduce((total, stat) => {
    const statName = stat.stat.name as keyof typeof statMap;
    return total + (statMap[statName] ?? 0) * stat.base_stat;
  }, 0);

  return basePrice;
};

export const getStatColor = (statName: string) => {
  const colors: Record<string, string> = {
    hp: "bg-red-500",
    attack: "bg-orange-500",
    defense: "bg-blue-500",
    "special-attack": "bg-purple-500",
    "special-defense": "bg-green-500",
    speed: "bg-yellow-500",
  };
  return colors[statName] || "bg-gray-500"; // Color por defecto
};
