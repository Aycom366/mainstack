import React, { ReactElement } from "react";
import MainstackLogo from "../atoms/icons/mainstack-logo";
import HomeIcon from "../atoms/icons/home-icon";
import AnalyticsIcon from "../atoms/icons/analytics-icon";
import RevenueIcon from "../atoms/icons/revenue-icon";
import PeopleIcon from "../atoms/icons/people-icon";
import Navlink from "../molecules/navlink";
import NavbarActions from "../organisms/navbar-actions";
import AppsActions from "@/pattern/revenue/organisms/apps-actions";

const navigation: {
  name: string;
  href: string;
  icon: ReactElement;
}[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    name: "Revenue",
    href: "/revenue",
    icon: <RevenueIcon />,
  },
  {
    name: "CRM",
    href: "/crm",
    icon: <PeopleIcon />,
  },
];

const Topbar = () => {
  return (
    <div className='px-4 w-full pt-2 z-10 bg-white fixed'>
      <nav className='flex items-center justify-between   h-[64px] w-full px-4 z-30  rounded-[100px]  shadow-[0px_2px_4px_0px_#2D3B430D]'>
        <MainstackLogo />

        <div className='flex items-center gap-5'>
          {navigation.map((nav, idx) => (
            <Navlink
              href={nav.href}
              exact={nav.href === "/" ? true : false}
              key={idx}
              label={nav.name}
              icon={nav.icon}
            />
          ))}
          <AppsActions />
        </div>

        <NavbarActions />
      </nav>
    </div>
  );
};

export default Topbar;
