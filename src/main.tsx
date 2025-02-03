import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import GridBackground from "./components/GridBackground.tsx";
import Header from "./components/Header.tsx";
import "./index.css";
import CartPage from "./pages/CartPage.tsx";
import PokemonPage from "./pages/PokemonPage.tsx";
import { store } from "./store/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GridBackground />
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="pokemon/:name" element={<PokemonPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
