import React from "react";
import NotificationIcon from "../atoms/icons/notification-icon";
import MessageIcon from "../atoms/icons/message-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileInitials from "../atoms/profile-initials";
import MenuIcon from "../atoms/icons/menu-icon";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";
import UserData from "@/pattern/revenue/molecules/user-data";
import { ScrollText, Settings, LogOut } from "lucide-react";
import {
  MdOutlineBugReport,
  MdOutlineCardGiftcard,
  MdOutlineSwitchAccount,
} from "react-icons/md";
import AppsIcon from "../atoms/icons/apps-icon";

const menuItems = [
  { icon: Settings, size: 20, label: "Settings" },
  { icon: ScrollText, size: 20, label: "Purchase History" },
  { icon: MdOutlineCardGiftcard, size: 20, label: "Refer and Earn" },
  { icon: AppsIcon, label: "Integrations" },
  { icon: MdOutlineBugReport, size: 24, label: "Report Bug" },
  { icon: MdOutlineSwitchAccount, size: 20, label: "Switch Account" },
  { icon: LogOut, size: 20, label: "Sign Out" },
];

const NavbarActions = () => {
  const { data, isLoading } = useGetUserQuery();
  return (
    <div className='flex items-center justify-between gap-2'>
      <div className='w-10 items-center flex justify-center h-10'>
        <NotificationIcon />
      </div>
      <div className='w-10 items-center flex justify-center h-10'>
        <MessageIcon />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className='flex items-center justify-between gap-2 py-1 pr-3 pl-[5px] w-[81px] rounded-[100px] bg-coolgrey-background'>
            <ProfileInitials
              loading={isLoading}
              name={data?.first_name + " " + data?.last_name}
            />
            <MenuIcon />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-[300px] shadow-calender mr-[20px] py-3 px-2 space-y-4'>
          <DropdownMenuLabel>
            <UserData />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className='flex items-center gap-2 text-primary text-base font-semibold'
            >
              <span className='w-[24px]'>
                <item.icon size={item.size || 24} />
              </span>
              {item.label}
            </DropdownMenuItem>
          ))}{" "}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarActions;
