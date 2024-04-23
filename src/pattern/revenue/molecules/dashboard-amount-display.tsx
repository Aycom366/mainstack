import { Skeleton } from "@/components/ui/skeleton";
import { formatAmount } from "@/lib/helpers/format-amount";
import InfoIcon from "@/pattern/common/atoms/icons/info-icon";
import React from "react";

interface IAmountDisplayProps {
  title: string;
  amount: number | any;
  loading: boolean;
}

const DashboardAmountDisplay = ({
  title,
  amount,
  loading,
}: IAmountDisplayProps) => {
  return (
    <div className="relative space-y-2 h-[66px] w-[271px]">
      <p className="text-sm font-medium text-coolgrey-foreground">{title}</p>
      {loading ? (
        <Skeleton className="rounded-[100px] h-[35px] w-[200px]" />
      ) : (
        <p className="text-[28px] font-bold text-primary">
          {formatAmount({ amount })}
        </p>
      )}
      <span className="absolute top-0 right-0" onClick={() => {}}>
        <InfoIcon />
      </span>
    </div>
  );
};

export default DashboardAmountDisplay;
