import { IArticleDetail, IGetArticlesResponse } from '@/types/article';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create API Slice
export const articlesSlice = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getArticlesByTag: builder.query<
      IGetArticlesResponse,
      { tagId: string; page: number }
    >({
      query: ({ tagId, page }: { tagId: string; page: number }) =>
        `/articles/tag/${tagId}?page=${page}`,
    }),
    getArticleById: builder.query<IArticleDetail, string>({
      query: (articleId) => `/articles?articleId=${articleId}`,
    }),
    getAllArticles: builder.query<IGetArticlesResponse, number>({
      query: (page) => `/articles?page=${page}`,
    }),
    getAllArticlesByCategoryId: builder.query<
      IGetArticlesResponse,
      {
        categoryId: string;
        page: number;
      }
    >({
      query: ({ categoryId, page }) =>
        `/articles/category/${categoryId}?page=${page}`,
    }),
  }),
});

export const {
  useGetArticlesByTagQuery,
  useGetArticleByIdQuery,
  useGetAllArticlesQuery,
  useGetAllArticlesByCategoryIdQuery,
} = articlesSlice;
