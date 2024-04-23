import ProfileInitials from "@/pattern/common/atoms/profile-initials";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";
import React from "react";

const UserData = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <div className='flex items-center gap-3'>
      <ProfileInitials
        loading={isLoading}
        name={data?.first_name + " " + data?.last_name}
      />
      <div>
        <p className='text-primary font-semibold text-[20px]'>
          {data?.first_name + " " + data?.last_name}
        </p>
        <p className='text-coolgrey-foreground font-medium text-sm'>
          {data?.email}
        </p>
      </div>
    </div>
  );
};

export default UserData;
