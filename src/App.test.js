import React from "react";
import App from "./components/App";
import AccountBalance from "./components/accountBalance/AccountBalance.jsx";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
