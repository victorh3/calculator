import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App with Header", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Header/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders App with Footer", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Footer/i);
  expect(linkElement).toBeInTheDocument();
});
