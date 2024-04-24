import { render, screen } from "@testing-library/react";
import AvailableBalance from "../available-balance";

describe("Available Balance", () => {
  it('renders "Available Balance" title', () => {
    render(<AvailableBalance loading={false} availableBalance={0} />);
    const titleElement = screen.getByText(/Available Balance/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders withdraw button", () => {
    render(<AvailableBalance loading={false} availableBalance={0} />);
    const titleElement = screen.getByRole("button", { name: /Withdraw/i });
    expect(titleElement).toBeInTheDocument();
  });

  it("renders loading state correctly", () => {
    render(<AvailableBalance loading={true} availableBalance={0} />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();

    const balance = screen.queryByText(/USD 0.00/i);
    expect(balance).not.toBeInTheDocument();
  });
});
