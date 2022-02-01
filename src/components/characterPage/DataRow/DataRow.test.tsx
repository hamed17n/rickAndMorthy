import React from "react";
import { render, screen } from "@testing-library/react";

import { DataRow } from ".";

test("render header", () => {
  render(<DataRow title="test" value="value" />);

  const titleElement = screen.getByRole("heading");
  const paragraphElement = screen.getByText("value");

  expect(titleElement).toContainHTML("test");
  expect(paragraphElement).toBeInTheDocument();
});
