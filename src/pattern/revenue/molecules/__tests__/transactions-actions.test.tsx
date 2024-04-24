import TransactionsActions from "../transactions-actions";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Transactions Actions", () => {
  it('renders "Filter" button', () => {
    render(<TransactionsActions />);
    const buttonElement = screen.getByRole("button", { name: /filter/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders "Export list" button', () => {
    render(<TransactionsActions />);
    const buttonElement = screen.getByRole("button", {
      name: /export list/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it('opens and closes the drawer when "Filter" button is clicked', () => {
    render(<TransactionsActions />);
    const buttonElement = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(buttonElement);
    const drawerElement = screen.getByRole("dialog");
    expect(drawerElement).toBeInTheDocument();
  });
});
