import React from "react";
import { render, screen } from "@testing-library/react";

import { ErrorWrapper } from ".";

test("render error wrapper content", () => {
  render(<ErrorWrapper message="test" />);
  const errorWrapperElement = screen.getByText(/test/i);
  expect(errorWrapperElement).toContainHTML("test");
});
