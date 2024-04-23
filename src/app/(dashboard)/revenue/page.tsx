"use client";
import ChartSection from "@/pattern/revenue/organisms/chart-section";
import RevenueSummary from "@/pattern/revenue/organisms/revenue-summary";
import TransactionsTable from "@/pattern/revenue/organisms/transactions-table";

const RevenuePage = () => {
  return (
    <div className='flex flex-col max-w-[1160px] mx-auto  w-full space-y-14'>
      <div className='flex items-center  justify-between w-full'>
        <ChartSection />
        <RevenueSummary />
      </div>
      <TransactionsTable />
    </div>
  );
};

export default RevenuePage;
