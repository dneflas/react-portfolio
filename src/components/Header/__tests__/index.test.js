import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";

const mockCurrentSection = jest.fn();
const mockSetCurrentSection = jest.fn();

afterEach(cleanup);

describe("Header renders", () => {
  it("renders", () => {
    render(<Header />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Header
        currentSection={mockCurrentSection}
        setCurrentSection={mockSetCurrentSection}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("title is visible", () => {
    const { getByTestId } = render(
      <Header
        currentSection={mockCurrentSection}
        setCurrentSection={mockSetCurrentSection}
      />
    );
    expect(getByTestId("title")).toHaveTextContent("Debbie Neflas");
  });
});
