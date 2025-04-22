import { IUser } from '@/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user: IUser) => ({
        url: '/user/signUp',
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    signIn: builder.mutation({
      query: (user: { email: string; password: string }) => ({
        url: '/user/signIn',
        method: 'POST',
        body: user,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useCreateUserMutation, useSignInMutation } = userSlice;
