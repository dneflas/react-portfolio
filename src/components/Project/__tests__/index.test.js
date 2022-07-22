import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Project from "..";

afterEach(cleanup);

describe("projects render", () => {
  it("renders", () => {
    render(<Project />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Project />);
    expect(asFragment()).toMatchSnapshot();
  });
});
