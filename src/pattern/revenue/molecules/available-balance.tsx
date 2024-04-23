import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatAmount } from "@/lib/helpers/format-amount";
import React from "react";

interface IProps {
  availableBalance: number | any;
  loading: boolean;
}
const AvailableBalance = ({ availableBalance, loading }: IProps) => {
  return (
    <div className="flex items-center gap-[64px] w-fit">
      <div className="space-y-3">
        <p className="text-sm font-medium text-coolgrey-foreground">
          Available Balance
        </p>
        {loading ? (
          <Skeleton className="h-[40px] w-[200px] rounded-[100px]" />
        ) : (
          <p className="text-4xl font-bold text-primary">
            {formatAmount({ amount: availableBalance })}
          </p>
        )}
      </div>

      <Button onClick={() => {}} className="!w-[167px]" size="lg">
        Withdraw
      </Button>
    </div>
  );
};

export default AvailableBalance;
