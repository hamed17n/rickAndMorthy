import React from "react";
import { render, screen } from "@testing-library/react";

import { characterList } from "mocks/character";
import { CharacterDetail } from ".";

const rick = characterList[0];

test("render character image", () => {
  render(<CharacterDetail {...rick} />);

  const imageElement = screen.getByRole("img");

  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", rick.image);
  expect(imageElement).toHaveAttribute("alt", rick.name);
});

test("render character details", () => {
  render(<CharacterDetail {...rick} />);

  const headingElements = screen.getAllByRole("heading");

  expect(headingElements.length).toEqual(6);
});
