import { IGetTagsResponse } from '@/types/tag';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create API Slice
export const tagsSlice = createApi({
  reducerPath: 'tags',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTags: builder.query<IGetTagsResponse, number>({
      query: (page) => `tags?page=${page}`,
    }),
    createTag: builder.mutation({
      query: (tags) => ({
        url: '/tags',
        method: 'POST',
        body: tags,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useGetTagsQuery, useCreateTagMutation, useLazyGetTagsQuery } =
  tagsSlice;
