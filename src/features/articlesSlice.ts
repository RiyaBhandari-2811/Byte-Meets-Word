import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create API Slice
export const articlesSlice = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getArticlesByTag: builder.query({
      query: ({ tagId, page }: { tagId: string; page: number }) =>
        `/articles/tag/${tagId}?page=${page}`,
    }),
    getArticleById: builder.query({
      query: (articleId) => `/articles/${articleId}`,
    }),
    getAllArticles: builder.query({
      query: (page) => `/articles?page=${page}`,
    }),
    getAllArticlesByCategoryId: builder.query({
      query: (categoryId) => `/articles/category/${categoryId}`,
    }),
  }),
});

export const {
  useGetArticlesByTagQuery,
  useGetArticleByIdQuery,
  useGetAllArticlesQuery,
  useGetAllArticlesByCategoryIdQuery,
} = articlesSlice;
