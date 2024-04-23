import React, { FC, useState } from "react";
import { badgeVariants } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { VariantProps } from "class-variance-authority";
import FilterToggleIcon from "./icons/filter-toggle-icon";
import Hidden from "../molecules/data-display/hidden";

interface IFilterToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof badgeVariants> {
  value: string;
  label: string;
}

const FilterToggle: FC<IFilterToggleProps> = ({ variant, value, label }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Toggle
      onClick={() => setIsClicked(!isClicked)}
      value={value}
      className='flex items-center gap-[6.26px]'
      variant={isClicked ? "primary" : "default"}
    >
      <Hidden visible={isClicked}>
        <span>
          <FilterToggleIcon color='#fff' />
        </span>
      </Hidden>
      {label}
    </Toggle>
  );
};

export default FilterToggle;
