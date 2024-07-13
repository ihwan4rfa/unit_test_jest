import React from "react";
import { fireEvent, render } from "@testing-library/react";
import HomePage from "@/components/pages/Home";

describe("render home", () => {
  it("should render home", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
  it("should click button submit on home page", () => {
    const { getByText } = render(<HomePage />);
    const buttonSubmit = getByText("Submit");
    fireEvent.click(buttonSubmit);
    expect(buttonSubmit).toBeInTheDocument();
  });
});
