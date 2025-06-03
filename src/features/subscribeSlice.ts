import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subscribeSlice = createApi({
  reducerPath: 'subscribe',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (email) => ({
        url: '/newsletter/subscribe',
        method: 'POST',
        body: email,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useSubscribeMutation } = subscribeSlice;
