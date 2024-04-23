"use client";
import React from "react";
import { useGetTransactionsQuery } from "@/redux/services/get-transactions.api-slice";
import { formatDate } from "@/lib/helpers/format-date";
import PulsePlaceholder from "@/pattern/common/atoms/icons/pulse-placeholder-icon";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const OVERVIEW_CHART_LEGEND = [{ label: "Deposit", color: "#CBD5E1" }];

const RevenueChart = () => {
  const { data, isLoading, isSuccess } = useGetTransactionsQuery();

  const updatedSeries: any = [
    {
      name: "sereis-1",
      data: data?.map((item) => item?.amount),
    },
  ];

  return (
    <div className='h-fit w-full max-w-[1200px]'>
      {isLoading && (
        <div className='h-[257px] w-[700px] flex flex-col items-center justify-center'>
          <PulsePlaceholder />
        </div>
      )}
      {!isLoading && isSuccess && typeof window !== "undefined" && (
        <Chart
          series={updatedSeries}
          options={{
            chart: {
              type: "line",
              id: "simple-line",
              toolbar: {
                show: false,
              },
            },
            colors: ["#ff5403"],
            stroke: {
              width: [1, 1],
              curve: "smooth",
            },
            grid: {
              show: false,
            },
            legend: {
              show: false,
            },
            xaxis: {
              categories: data?.map((data) =>
                formatDate({ inputDate: data.date })
              ),
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          }}
          type='line'
          width='700'
          height='257'
        />
      )}
    </div>
  );
};

export default RevenueChart;
