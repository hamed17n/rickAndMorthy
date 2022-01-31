import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { Header, HeaderProps } from ".";

const HeaderWrapper = (props: HeaderProps) => (
  <MemoryRouter>
    <Header {...props} />
  </MemoryRouter>
);

test("render header", () => {
  render(<HeaderWrapper title="test" />);

  const titleElement = screen.getByRole("heading");

  expect(titleElement).toContainHTML("test");
});
