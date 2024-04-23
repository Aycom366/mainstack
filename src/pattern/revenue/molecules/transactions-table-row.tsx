import React from "react";
import { formatAmount } from "@/lib/helpers/format-amount";
import { formatDate } from "@/lib/helpers/format-date";
import FailedTransactionArrow from "@/pattern/common/atoms/icons/failed-transaction-arrow";
import SuccessfulTransactionArrow from "@/pattern/common/atoms/icons/successful-transaction-arrow";
import { cn } from "@/lib/utils";

interface IProps {
  desc: "deposit" | "withdrawal";
  status: string;
  amount: number;
  date: string;
}

const TransactionsTableRow = ({ amount, status, desc, date }: IProps) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div
          className={cn(
            "capitalize flex items-center justify-center w-[48px] h-[48px] rounded-full",
            desc == "withdrawal"
              ? "bg-danger-background"
              : "bg-success-background"
          )}
        >
          {desc === "withdrawal" ? (
            <FailedTransactionArrow />
          ) : (
            <SuccessfulTransactionArrow />
          )}
        </div>

        <div>
          <p className='text-primary font-medium text-base'>{desc}</p>
          <p
            className={cn(
              "capitalize text-sm font-medium text-coolgrey-foreground",
              status == "successful" && "text-[#0EA163]",
              status == "pending" && "text-pending",
              status == "failed" && "text-danger-foreground"
            )}
          >
            {status}
          </p>
        </div>
      </div>
      <div>
        <p className='text-base text-primary font-bold'>
          {formatAmount({ amount })}
        </p>
        <p className='text-sm font-medium text-coolgrey-foreground'>
          {formatDate({ inputDate: date })}
        </p>
      </div>
    </div>
  );
};

export default TransactionsTableRow;
