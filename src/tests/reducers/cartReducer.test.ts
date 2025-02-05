import { describe, it, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addToCart } from "@/store/cartSlice";

describe("Cart Reducer", () => {
  it("debería agregar 3 Pokémon diferentes al carrito", () => {
    const store = configureStore({ reducer: { cart: cartReducer } });

    const pokemon1 = {
      id: 1,
      name: "Pikachu",
      price: 100,
      quantity: 1,
      types: ["Electric"],
      image: "",
    };
    const pokemon2 = {
      id: 2,
      name: "Charmander",
      price: 120,
      quantity: 1,
      types: ["Fire"],
      image: "",
    };
    const pokemon3 = {
      id: 3,
      name: "Bulbasaur",
      price: 90,
      quantity: 1,
      types: ["Grass", "Poison"],
      image: "",
    };

    store.dispatch(addToCart(pokemon1));
    store.dispatch(addToCart(pokemon2));
    store.dispatch(addToCart(pokemon3));

    const state = store.getState().cart;
    expect(state.items).toHaveLength(3);
    expect(state.items.map((item) => item.name)).toContain("Pikachu");
    expect(state.items.map((item) => item.name)).toContain("Charmander");
    expect(state.items.map((item) => item.name)).toContain("Bulbasaur");
  });

  it("deberia actualizar la cantidad de un pokemon en el carrito", () => {
    const store = configureStore({ reducer: { cart: cartReducer } });

    const pokemon = {
      id: 1,
      name: "Pikachu",
      price: 100,
      quantity: 1,
      types: ["Electric"],
      image: "",
    };

    store.dispatch(addToCart(pokemon));
    store.dispatch(addToCart(pokemon));

    const state = store.getState().cart;
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
  });
});
