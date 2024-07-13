import Typography from "@/components/ui/Typography";
import { render } from "@testing-library/react";

describe("typography component", () => {
  it("should render typography component", () => {
    const { container } = render(<Typography type="h1">test</Typography>);
    expect(container).toMatchSnapshot();
  });
});
