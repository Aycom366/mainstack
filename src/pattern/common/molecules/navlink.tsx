import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

interface INavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactElement;
  label: string;
  href: string;
  exact?: boolean;
  innerRef?: any;
}

const Navlink = ({
  icon,
  label,
  href,
  exact,
  innerRef,
  ...props
}: INavLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      ref={innerRef}
      className={`flex items-center gap-1 rounded-[100px] py-2 pr-[18px] pl-[14px] text-base font-semibold ${
        isActive
          ? "text-white bg-primary"
          : "text-coolgrey-foreground bg-white hover:bg-coolgrey-background"
      } cursor-pointer`}
      // className="flex items-center gap-1 rounded-[100px] py-2 pr-[18px] pl-[14px] text-base font-semibold text-coolgrey-foreground hover:bg-coolgrey-background cursor-pointer"
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default Navlink;
