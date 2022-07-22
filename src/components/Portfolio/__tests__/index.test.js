import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Portfolio from "..";

afterEach(cleanup);

describe("portfolio section renders", () => {
  it("renders", () => {
    render(<Portfolio />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Portfolio />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("title renders", () => {
  it("h2 renders", () => {
    const { getByTestId } = render(<Portfolio />);
    expect(getByTestId("portfolioH2")).toHaveTextContent("Portfolio");
  });
});
