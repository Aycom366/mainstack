import { formatAmount } from "../format-amount";

describe("formatAmount", () => {
  it("formats small amounts correctly", () => {
    const result = formatAmount({ amount: 314567 });
    expect(result).toBe("USD 314,567.00");
  });

  it("formats large amounts correctly", () => {
    const result = formatAmount({ amount: 2000000 });
    expect(result).toBe("USD 2,000,000.00");
  });

  it("formats zero correctly", () => {
    const result = formatAmount({ amount: 0 });
    expect(result).toBe("USD 0.00");
  });

  it("formats negative amounts correctly", () => {
    const result = formatAmount({ amount: -314567 });
    expect(result).toBe("USD -314,567.00");
  });
});
