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
    createArticle: builder.mutation<
      IArticleDetail,
      { payload: Partial<IArticleDetail>; authToken: string }
    >({
      query: ({ payload, authToken }) => ({
        url: '/articles',
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: authToken,
        },
      }),
    }),
    updateArticle: builder.mutation<
      IArticleDetail,
      { articleId: string; payload: Partial<IArticleDetail>; authToken: string }
    >({
      query: ({ articleId, payload, authToken }) => ({
        url: `/articles?articleId=${articleId}`,
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: authToken,
        },
      }),
    }),
  }),
});

export const {
  useGetArticlesByTagQuery,
  useGetArticleByIdQuery,
  useGetAllArticlesQuery,
  useGetAllArticlesByCategoryIdQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
} = articlesSlice;
