import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
  
  test("should load contact us components", () => {
      render(<Contact />);

      const heading = screen.getByRole("heading");

      // Assert that the heading is in the document
      expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assert that the button is in the document
    expect(button).toBeInTheDocument();
  });

  test("should load 2 inout boxes in Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // Assert that there are 2 input boxes
    expect(inputBoxes).toHaveLength(2);
});

});
