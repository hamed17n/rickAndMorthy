import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "../src/styles/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

export const decorators = [
  (story) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    </BrowserRouter>
  ),
];
