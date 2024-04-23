"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}
      className={cn("p-3", className)}
      classNames={{
        root: " bg-[hsla(0,0%,100%,1)] shadow-calender min-h-[342px] py-[33px] px-[20px] !rounded-[16px] ",
        months:
          "w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "w-full space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn("h-7 w-7 bg-transparent p-0 hover:opacity-100"),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "grid grid-cols-7 w-full",
        head_cell:
          "text-[#56616B]  rounded-md w-[50px] font-normal text-[0.8rem] dark:text-slate-400",
        row: "grid grid-cols-7  gap-1 w-full mt-2",
        cell: cn(
          "relative p-0   text-center  text-sm focus-within:relative focus-within:outline-primary focus-within:outline-primary focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-[8px]",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-[8px] [&:has(>.day-range-start)]:rounded-l-[8px] first:[&:has([aria-selected])]:rounded-l-[8px] last:[&:has([aria-selected])]:rounded-r-[8px]"
            : "[&:has([aria-selected])]:rounded-[8px]"
        ),
        day: cn(
          "h-[50px] w-[50px]  p-0 text-[hsla(215,16%,47%,1)] font-medium rounded-full aria-selected:opacity-100 focus-within:outline-primary"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-white hover:text-white focus-within:outline-primary focus:bg-primary focus:text-white focus:font-bold rounded-[8px]",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className='h-4 w-4 ' />,
        IconRight: ({ ...props }) => <ChevronRight className='h-4 w-4' />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
