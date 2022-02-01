import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import MockAdapter from "axios-mock-adapter";

import { api } from "utils/api";
import { episodeList } from "mocks/episode";
import { EpisodesDetail } from ".";
import { EPISODES } from "constants/apiRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mock = new MockAdapter(api);
const firstEpisode = episodeList[0];

mock
  .onGet(EPISODES("1"))
  .replyOnce(200, firstEpisode)
  .onGet(EPISODES("1"))
  .replyOnce(200, firstEpisode)
  .onGet(EPISODES("1,2"))
  .replyOnce(200, episodeList);

const EpisodesDetailWrapper = ({ list }: { list: string }) => (
  <QueryClientProvider client={queryClient}>
    <EpisodesDetail list={list} />
  </QueryClientProvider>
);

beforeEach(() => {
  queryClient.clear();
});

describe("Success Cases", function () {
  test("Loading Case", () => {
    render(<EpisodesDetailWrapper list="1" />);
    const linkElements = screen.getByTitle("loading");
    expect(linkElements).toBeInTheDocument();
  });

  test("render single episode", async () => {
    render(<EpisodesDetailWrapper list="1" />);
    const titleElement = await screen.findByText("Episodes Detail");
    const headingElements = await screen.findAllByRole("heading");
    const cellElements = await screen.findAllByTestId("grid-cell");

    expect(titleElement).toBeInTheDocument();
    expect(headingElements.length).toEqual(5);
    expect(cellElements.length).toEqual(4);
  });

  test("render multiple episodes", async () => {
    render(<EpisodesDetailWrapper list="1,2" />);
    const titleElement = await screen.findByText("Episodes Detail");
    const cellElements = await screen.findAllByTestId("grid-cell");

    expect(titleElement).toBeInTheDocument();
    expect(cellElements.length).toEqual(80);
  });
});
