import { formatDate } from "../format-date";

describe("formatDate", () => {
  it("formats date string correctly", () => {
    const result = formatDate({ inputDate: "2022-12-31" });
    expect(result).toBe("Dec 31, 2022");
  });

  it('returns "Invalid Date" for invalid date strings', () => {
    const result = formatDate({ inputDate: "invalid date string" });
    expect(result).toBe("Invalid Date");
  });
});
