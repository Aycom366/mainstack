import { formatDateString } from "../format-date-string";

describe("formatDateString", () => {
  it("formats date string correctly", () => {
    const result = formatDateString("2022-12-31");
    expect(result).toBe("Sat Dec 31 2022");
  });

  it('returns "Invalid Date" for invalid date strings', () => {
    const result = formatDateString("invalid date string");
    expect(result).toBe("Invalid Date");
  });
});
