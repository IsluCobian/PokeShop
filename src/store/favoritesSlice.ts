import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const FAVORITES_STORAGE_KEY = "pokemon_favorites";

const loadFavorites = (): string[] => {
  const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavorites = (favorites: string[]) => {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: loadFavorites(),
  },
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
      saveFavorites(state.favorites);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
