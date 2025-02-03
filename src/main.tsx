import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="pokemon/:name" element={<PokemonPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
