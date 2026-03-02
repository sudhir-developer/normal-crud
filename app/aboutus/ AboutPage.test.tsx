import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AboutPage from "./page";

const mockData = [
  { userId: 1, id: 1, title: "Test Todo 1", completed: false },
  { userId: 1, id: 2, title: "Test Todo 2", completed: true },
];

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockData),
  }) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders fetched data correctly", async () => {
  render(<AboutPage />);

  // wait for async UI update
  const items = await screen.findAllByRole("listitem");

  expect(items.length).toBe(2);
  expect(screen.getByText(/Test Todo 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Todo 2/i)).toBeInTheDocument();
});

test("toggles checkbox", async () => {
  render(<AboutPage />);

  // wait until UI fully rendered
  await screen.findByText(/Test Todo 1/i);

  const checkbox = screen.getAllByRole("checkbox")[0];

  expect(checkbox).not.toBeChecked();

  await userEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});