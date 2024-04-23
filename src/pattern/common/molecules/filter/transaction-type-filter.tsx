"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface IProps {
  items: string[];
}

export default function TransactionTypeFilter({ items }: IProps) {
  const [checkedValue, setCheckedValue] = React.useState([""]);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Popover open={isActive} onOpenChange={setIsActive}>
      <PopoverTrigger asChild>
        <Button
          variant='grey'
          className={cn(
            "font-normal rounded-[12px] w-full overflow-hidden text-ellipsis absolute",
            isActive && "shadow-[0_0_0_3px_black]"
          )}
        >
          <p className='text-left  w-full'>
            {checkedValue.filter(Boolean).join(", ") || "Select..."}
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[410px] shadow-calender'>
        {items.map((item) => (
          <div key={item} className='flex h-[48px] items-center space-x-2'>
            <Checkbox
              onCheckedChange={(checked) =>
                setCheckedValue((prev) =>
                  checked
                    ? [...prev, item]
                    : prev.filter((prevItem) => prevItem !== item)
                )
              }
              checked={checkedValue.includes(item)}
              id={item}
            />
            <label
              htmlFor={item}
              className='font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {item}
            </label>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
