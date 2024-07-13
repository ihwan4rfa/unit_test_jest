import React from "react";
import { fireEvent, render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Button from "@/components/ui/Button";

describe("button component", () => {
  it("should render button component", () => {
    const { container } = render(
      <Button onClick={() => console.log("clicked")}>Save</Button>
    );
    expect(container).toMatchSnapshot();
  });
  it("should click onclick event", () => {
    const { getByText } = render(
      <Button onClick={() => console.log("clicked")}>Save</Button>
    );
    const buttonSubmit = getByText("Submit");
    fireEvent.click(buttonSubmit);
    expect(buttonSubmit).toBeInTheDocument();
  });
});
