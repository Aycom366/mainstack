import React, { FC, ReactElement } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import Hidden from "../data-display/hidden";
import { cn } from "@/lib/utils";

interface IButtonWithIconprops extends ButtonProps {
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  isActive?: boolean;
}

const ButtonWithIcon: FC<IButtonWithIconprops> = ({
  prefixIcon,
  suffixIcon,
  isActive = false,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={cn(
        "flex items-center gap-3 !w-fit",
        isActive && "shadow-[0_0_0_3px_black]"
      )}
    >
      <Hidden visible={prefixIcon ? true : false}>
        <span>{prefixIcon}</span>
      </Hidden>
      {children}
      <Hidden visible={suffixIcon ? true : false}>
        <span>{suffixIcon}</span>
      </Hidden>
    </Button>
  );
};

export default ButtonWithIcon;
