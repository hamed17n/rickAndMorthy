import React from "react";
import { render, screen } from "@testing-library/react";

import { Image } from ".";

test("render Image", () => {
  render(<Image src="src" alt="alt" />);

  const imageElement = screen.getByRole("img");

  expect(imageElement).toHaveAttribute("src", "src");
  expect(imageElement).toHaveAttribute("alt", "alt");
});
