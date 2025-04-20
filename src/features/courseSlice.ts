import { IGetCoursesResponse } from '@/types/course';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create API Slice
export const coursesSlice = createApi({
  reducerPath: 'courses',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCourses: builder.query<IGetCoursesResponse, number>({
      query: (page: number) => `course?page=${page}`,
    }),
  }),
});

export const { useGetCoursesQuery } = coursesSlice;
