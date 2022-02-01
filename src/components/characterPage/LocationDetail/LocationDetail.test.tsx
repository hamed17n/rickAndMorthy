import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import MockAdapter from "axios-mock-adapter";

import { api } from "utils/api";
import { locations } from "mocks/location";
import { LocationDetail } from ".";
import { LOCATION } from "constants/apiRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mock = new MockAdapter(api);
const earth = locations[0];

mock.onGet(LOCATION(1)).replyOnce(200, earth).onGet(LOCATION(1)).replyOnce(200, earth);

const LocationDetailWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <LocationDetail title="test" id={1} />
  </QueryClientProvider>
);

describe("Success Cases", function () {
  test("Loading Case", () => {
    render(<LocationDetailWrapper />);
    const linkElements = screen.getByTitle("loading");
    expect(linkElements).toBeInTheDocument();
  });

  test("render location", async () => {
    render(<LocationDetailWrapper />);
    const titleElement = await screen.findByText("test");
    const headingElements = await screen.findAllByRole("heading");

    expect(titleElement).toBeInTheDocument();
    expect(headingElements.length).toEqual(5);
  });
});
