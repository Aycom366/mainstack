/**
 * @description Formats currency amount
 * @param {number} amount - currency amount
 * @example
 * Formats 314567 to "314,567.00"
 * @returns string
 */

interface IFormatAmountProps {
  amount: number;
}

export const formatAmount = ({ amount }: IFormatAmountProps): string => {
  return `USD ${Number(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
