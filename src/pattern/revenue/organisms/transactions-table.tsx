import React from "react";
import TransactionsTableRow from "../molecules/transactions-table-row";
import { Separator } from "@/components/ui/separator";
import { useGetTransactionsQuery } from "@/redux/services/get-transactions.api-slice";
import PulsePlaceholder from "@/pattern/common/atoms/icons/pulse-placeholder-icon";
import TransactionsActions from "../molecules/transactions-actions";

const TransactionsTable = () => {
  const { data, isLoading, isSuccess, isError } = useGetTransactionsQuery();

  return (
    <div className='space-y-4'>
      <div className='w-full flex items-center justify-between'>
        <div className='space-y-'>
          <p className='text-2xl font-bold text-primary'>
            {data?.length} Transactions
          </p>
          <p className='text-sm font-medium text-coolgrey-foreground'>
            Your transactions for the last 7 days
          </p>
        </div>
        <TransactionsActions />
      </div>
      <Separator />

      <div className='space-y-[24px]'>
        {!isLoading &&
          !isError &&
          isSuccess &&
          data?.map((transaction, idx) => (
            <TransactionsTableRow
              key={idx}
              amount={isLoading ? 0 : transaction?.amount}
              date={transaction.date}
              status={transaction.status}
              desc={transaction.type as any}
            />
          ))}

        {isLoading && (
          <div className='h-[300px] flex flex-col items-center justify-center'>
            <PulsePlaceholder />
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsTable;
