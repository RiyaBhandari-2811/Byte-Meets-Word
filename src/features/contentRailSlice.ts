import { IRail } from '@/types/contentRail';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contentRailSlice = createApi({
  reducerPath: 'contentRail',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getContentRail: builder.query<IRail[], void>({
      query: () => '/contentRail',
    }),
  }),
});

export const { useGetContentRailQuery } = contentRailSlice;
