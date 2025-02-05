import { describe, it, expect } from "vitest";
import { calculateBasePrice } from "@/lib/utils";
import { Pokemon } from "@/types/pokemon";

describe("calculateBasePrice", () => {
  it("debería calcular correctamente el precio basado en estadísticas", () => {
    const fakePokemon: Pokemon = {
      id: 25,
      name: "Pikachu",
      stats: [
        { base_stat: 35, stat: { name: "hp" } },
        { base_stat: 55, stat: { name: "attack" } },
        { base_stat: 40, stat: { name: "defense" } },
        { base_stat: 50, stat: { name: "special-attack" } },
        { base_stat: 50, stat: { name: "special-defense" } },
        { base_stat: 90, stat: { name: "speed" } },
      ],
      sprites: {
        front_default: "",
        other: undefined,
      },
      types: [],
      abilities: [],
    };

    const price = calculateBasePrice(fakePokemon);
    expect(price).toBeCloseTo(
      1 * 35 + 1.5 * 55 + 1.2 * 40 + 1.8 * 50 + 1.4 * 50 + 1.3 * 90,
      2
    );
  });
});
