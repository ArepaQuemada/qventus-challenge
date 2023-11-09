import { screen, render } from "@testing-library/react";
import PasswordContainer from "./PasswordContainer";
import userEvent from "@testing-library/user-event";

describe("Testing PasswordContainer", () => {
  test("Should have heading visible", () => {
    render(<PasswordContainer />);
    expect(screen.getByRole("heading")).toBeVisible();
  });

  test("Should render with initial validations status", () => {
    render(<PasswordContainer />);
    expect(screen.getAllByText(/x/i)).toHaveLength(3);
    expect(screen.getAllByText(/\u2713/)).toHaveLength(1);
  });

  test("Should fill password and pass every validation", async () => {
    render(<PasswordContainer />);
    const passInput = screen.getByRole("textbox");
    await userEvent.type(passInput, "abcA!65");
    expect(screen.getAllByText(/\u2713/)).toHaveLength(4);
  });
});
