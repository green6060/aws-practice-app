import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders practice react aws link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Practice React, AWS, and TypeScript/i);
  expect(linkElement).toBeInTheDocument();
});
