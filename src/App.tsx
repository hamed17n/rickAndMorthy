import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { MainPage, CharacterPage } from "pages";
import { MAIN_PAGE, CHARACTER_PAGE } from "constants/appRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={MAIN_PAGE} element={<MainPage />} />
          <Route path={CHARACTER_PAGE(":id")} element={<CharacterPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
