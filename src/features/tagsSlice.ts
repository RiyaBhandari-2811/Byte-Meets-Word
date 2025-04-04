import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create API Slice
export const tagsSlice = createApi({
  reducerPath: 'tags',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTags: builder.query({
      query: (page) => `tags?page=${page}`,
    }),
  }),
});

export const { useGetTagsQuery } = tagsSlice;
