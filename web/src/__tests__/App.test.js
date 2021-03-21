import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders title message", () => {
    render(<App />);
    expect(screen.getByText("เที่ยวไหนดี")).toBeInTheDocument();
  });

  it("renders input field (for keyword) w/ correct placeholder msg", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("หาที่เที่ยวแล้วไปกัน...")
    ).toBeInTheDocument();
  });
});
