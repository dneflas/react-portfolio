import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const mockCurrentSection = jest.fn();
const mockSetCurrentSection = jest.fn();

afterEach(cleanup);

describe("Nav components render", () => {
  it("renders", () => {
    render(
      <Nav
        currentSection={mockCurrentSection}
        setCurrentSection={mockSetCurrentSection}
      />
    );
  });
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        currentSection={mockCurrentSection}
        setCurrentSection={mockSetCurrentSection}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Links are visible", () => {
  it("inserts text into links", () => {
    const { getByTestId } = render(
      <Nav
        currentSection={mockCurrentSection}
        setCurrentSection={mockSetCurrentSection}
      />
    );
    expect(getByTestId("about")).toHaveTextContent("About Me");
    expect(getByTestId("portfolio")).toHaveTextContent("Portfolio");
    expect(getByTestId("contact")).toHaveTextContent("Contact");
    expect(getByTestId("resume")).toHaveTextContent("Resume");
  });
});
