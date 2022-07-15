import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "App";

test("Home work as expected", async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Tendencias/i);
  expect(title).toBeVisible();
});

test("Search from", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "Marvel" } });

  const form = await screen.findByRole("form");
  fireEvent.submit(form);

  const title = await screen.findByText("Marvel");
  expect(title).toBeVisible();
});
