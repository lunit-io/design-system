import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Search } from "../../dist";
import SearchIcon from "../../dist/Search";

describe("Should support 2-way import", () => {
  test("top-level import", () => {
    const { container } = render(<Search />);
    expect(container.firstChild?.nodeName).toBe("svg");
  });

  test("path import", () => {
    const { container } = render(<SearchIcon />);
    expect(container.firstChild?.nodeName).toBe("svg");
  });
});
