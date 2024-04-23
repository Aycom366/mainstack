/**
 * @description Formats currency amount
 * @param {number} amount - currency amount
 * @param {string} currencySymbol - currency symbol e.g: $
 * @example
 * Formats 314567 to "$314,567.00"
 * Formats 2000000 to "2M"
 * @returns string
 */

interface IFormatAmountProps {
  amount: number;
}

export const formatAmount = ({ amount }: IFormatAmountProps): string => {
  // format number to US dollar
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
  });

  const formattedAmount = USDollar.format(amount);

  return formattedAmount;
};
