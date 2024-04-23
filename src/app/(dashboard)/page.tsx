"use client";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";

export default function Home() {
  const { data } = useGetUserQuery();

  return (
    <>
      <div>Home Page</div>
    </>
  );
}
