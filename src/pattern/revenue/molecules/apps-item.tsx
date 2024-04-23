import React, { ReactElement } from "react";

interface IProps {
  icon: ReactElement;
  title: string;
  desc: string;
}

const AppsItem = ({ icon, title, desc }: IProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-[55px] h-[50px] rounded-xl border border-coolgrey-background bg-transparent">
        {icon}
      </div>
      <div>
        <p className="text-base font-semibold text-primary">{title}</p>
        <p className="text-sm font-medium text-coolgrey-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default AppsItem;
