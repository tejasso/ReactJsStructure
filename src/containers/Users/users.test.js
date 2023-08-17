// containers/UsersContainer/UsersContainer.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { userService } from "../../api";
import Users from "./Users";

// Mocking the geAlltUser function from userService
jest.mock("../../api", () => ({
  userService: {
    geAlltUser: jest.fn(),
  },
}));

test("renders user names", async () => {
  // Arrange
  const mockUsers = [
    { id: 1, title: "User 1" },
    { id: 2, title: "User 2" },
  ];
  userService.geAlltUser.mockResolvedValue(mockUsers);

  // Act
  render(<Users />);

  // Assert
  const userElements = await screen.findAllByRole("listitem");
  expect(userElements).toHaveLength(2);
  expect(userElements[0]).toHaveTextContent("User 1");
  expect(userElements[1]).toHaveTextContent("User 2");
});
