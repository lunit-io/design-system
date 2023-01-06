import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Analyze } from "../../dist";
import AnalyzeIcon from "../../dist/Analyze";

describe("Should support 2-way import", () => {
  test("top-level import", () => {
    const { container } = render(<Analyze />);
    expect(container.firstChild?.nodeName).toBe("svg");
  });

  test("path import", () => {
    const { container } = render(<AnalyzeIcon />);
    expect(container.firstChild?.nodeName).toBe("svg");
  });
});
