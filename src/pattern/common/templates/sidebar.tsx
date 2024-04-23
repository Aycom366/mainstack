import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

const Sidebar = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <aside className='flex flex-col items-center justify-between w-[48px] h-[192px] gap-1 p-1 rounded-[100px] bg-white shadow-[0px_6px_12px_0px_#5C738314]'>
        {[
          { image: "bgimage1", toolTip: "Link in Bio" },
          { image: "bgimage2", toolTip: "Store" },
          { image: "bgimage3", toolTip: "Media Kit" },
          { image: "bgimage4", toolTip: "Invoicing" },
        ].map((image) => (
          <Tooltip key={image.image}>
            <TooltipTrigger asChild>
              <Link
                href=''
                className={`w-10 h-10  mix-blend-luminosity hover:mix-blend-normal ${image.image}`}
              ></Link>
            </TooltipTrigger>
            <TooltipContent
              className='bg-black py-2'
              sideOffset={10}
              side='right'
            >
              <p className='text-white'>{image.toolTip}</p>
              <TooltipArrow className='TooltipArrow' />
            </TooltipContent>
          </Tooltip>
        ))}
      </aside>
    </TooltipProvider>
  );
};

export default Sidebar;
