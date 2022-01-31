import React from "react";
import { render, screen } from "@testing-library/react";

import { Loading } from ".";

test("render Loading", () => {
  render(<Loading />);

  const loadingElement = screen.getByTitle("loading");

  expect(loadingElement).toBeInTheDocument();
});
