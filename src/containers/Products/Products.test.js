// ./Products.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { productService } from "../../api";
import Products from "./Products";

jest.mock("../../api", () => ({
  productService: {
    getAllProduct: jest.fn(),
  },
}));

test("Render Product names", async () => {
  // Arrange
  const mockProducts = [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
  ];

  productService.getAllProduct.mockResolvedValue(mockProducts);

  // Act
  render(<Products />);

  // Assert
  const productElements = await screen.findAllByRole("listitem");
  expect(productElements).toHaveLength(2);
  expect(productElements[0]).toHaveTextContent("Product 1");
  expect(productElements[1]).toHaveTextContent("Product 2");
});
