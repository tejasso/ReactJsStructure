import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashbord";

test("renders welcome message", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Welcome to the Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
