import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PortfolioContainer from "..";

afterEach(cleanup);

describe("Portfolio container renders", () => {
  it("renders", () => {
    render(<PortfolioContainer />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<PortfolioContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
