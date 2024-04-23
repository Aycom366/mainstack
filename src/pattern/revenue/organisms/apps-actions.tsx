"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";

import AppsIcon from "@/pattern/common/atoms/icons/apps-icon";
import AppsItem from "../molecules/apps-item";
import SidebarIconOne from "@/pattern/common/atoms/icons/sidebar-icon-one";
import SidebarIconTwo from "@/pattern/common/atoms/icons/sidebar-icon-two";
import SidebarIconThree from "@/pattern/common/atoms/icons/sidebar-icon-three";
import SidebarIconFour from "@/pattern/common/atoms/icons/sidebar-icon-four";
import { Separator } from "@/components/ui/separator";

const Items = [
  {
    icon: <SidebarIconOne />,
    title: "Link in Bio",
    desc: "Manage your Link in Bio",
  },
  {
    icon: <SidebarIconTwo />,
    title: "Store",
    desc: "Manage your Store Activities",
  },
  {
    icon: <SidebarIconThree />,
    title: "Media Kit",
    desc: "Manage your Media Kit",
  },
  {
    icon: <SidebarIconFour />,
    title: "Invoicing",
    desc: "Manage your Invoicing",
  },
  {
    icon: <SidebarIconOne />,
    title: "Bookings",
    desc: "Manage your Bookings",
  },
];

const AppsActions = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className='flex items-center justify-between gap-2'>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className={`flex items-center gap-4 h-[40px] whitespace-nowrap rounded-[100px] py-2 pr-[18px] pl-[14px] text-base font-semibold ${
            open
              ? "text-white bg-primary"
              : "text-coolgrey-foreground bg-white hover:bg-coolgrey-background"
          } cursor-pointer`}
        >
          <span className='flex items-center gap-2'>
            <AppsIcon color={open ? "white" : "#56616b"} />
            Apps
          </span>
          {open && (
            <>
              <Separator
                orientation='vertical'
                className='w-[0.5px] text-[#56616b] bg-coolgrey-foreground'
              />
              <span className='flex items-center gap-2'>
                Link in Bio
                <ChevronDown color='white' />
              </span>
            </>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent className='w-[400px] shadow-calender border-none rounded-[20px] mr-[20px] py-3 px-2 space-y-4'>
          {Items.map((item) => (
            <DropdownMenuItem
              key={item.title}
              className='p-3 group  rounded-xl hover:shadow flex-row justify-between hover:!bg-white border border-transparent  hover:border-coolgrey-background'
            >
              <AppsItem icon={item.icon} title={item.title} desc={item.desc} />
              <ChevronRight
                className='opacity-0 group-hover:opacity-100'
                size={14}
                color='black'
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AppsActions;
