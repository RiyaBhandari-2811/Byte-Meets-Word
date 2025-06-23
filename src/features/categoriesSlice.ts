import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create API Slice
export const categoriesSlice = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (page) => `categories?page=${page}`,
    }),
  }),
});
export const { useGetCategoriesQuery, useLazyGetCategoriesQuery } =
  categoriesSlice;
