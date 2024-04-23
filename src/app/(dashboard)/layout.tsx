"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Topbar from "@/pattern/common/templates/topbar";
import Sidebar from "@/pattern/common/templates/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "bg-accent w-full min-h-screen h-full p-3  pt-0 flex flex-col items-center"
      )}
    >
      <Topbar />

      <div className='relative w-full h-screen'>
        <main className='mt-[100px] pb-20 px-[80px] w-full'>{children}</main>
        <div className='fixed top-[310px] left[16px]'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
