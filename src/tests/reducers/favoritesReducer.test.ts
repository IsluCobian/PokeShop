import { describe, it, expect } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer, { toggleFavorite } from "@/store/favoritesSlice";

describe("Favorites Reducer", () => {
  it("debería agregar un Pokémon a favoritos", () => {
    const store = configureStore({ reducer: { favorites: favoritesReducer } });

    const pokemon = { id: 4, name: "Squirtle" };

    store.dispatch(toggleFavorite(pokemon.name));

    const state = store.getState().favorites;
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toBe("Squirtle");
  });

  it("debería quitar un Pokémon de favoritos si ya está agregado", () => {
    const store = configureStore({ reducer: { favorites: favoritesReducer } });

    const pokemon = { id: 4, name: "Squirtle" };

    store.dispatch(toggleFavorite(pokemon.name)); // Agregar
    store.dispatch(toggleFavorite(pokemon.name)); // Quitar

    const state = store.getState().favorites;
    expect(state.favorites).toHaveLength(0);
  });
});
