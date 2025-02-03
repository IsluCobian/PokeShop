import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";
import paginationReducer from "./paginationSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    pagination: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
