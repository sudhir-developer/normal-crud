import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import NewComponent from "./new";

describe("Debounce Search Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("filters products after debounce delay", () => {
    render(<NewComponent />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "iphone" } });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(screen.getByText(/iPhone 15/i)).toBeInTheDocument();
    expect(screen.queryByText(/Samsung/i)).not.toBeInTheDocument();
  });
});