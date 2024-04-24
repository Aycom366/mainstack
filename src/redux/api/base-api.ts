import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fe-task-api.mainstack.io/",
});

export const baseApiSlice = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  refetchOnReconnect: true,
  endpoints: () => ({}),
});
