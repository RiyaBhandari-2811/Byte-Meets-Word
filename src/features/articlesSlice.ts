import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create API Slice
export const articlesSlice = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getArticlesByTag: builder.query({
      query: (tagId) => `/articles/tag/${tagId}`,
    }),
    getArticleById: builder.query({
      query: (articleId) => `/articles/${articleId}`,
    }),
    getAllArticles: builder.query({
      query: () => '/articles',
    }),
  }),
});

export const {
  useGetArticlesByTagQuery,
  useGetArticleByIdQuery,
  useGetAllArticlesQuery,
} = articlesSlice;
