import { configureStore } from '@reduxjs/toolkit';
import { tagsSlice } from '@/features/tagsSlice';
import { articlesSlice } from '@/features/articlesSlice';
import { contentRailSlice } from '@/features/contentRailSlice';

export const store = configureStore({
  reducer: {
    [tagsSlice.reducerPath]: tagsSlice.reducer,
    [articlesSlice.reducerPath]: articlesSlice.reducer,
    [contentRailSlice.reducerPath]: contentRailSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagsSlice.middleware,
      articlesSlice.middleware,
      contentRailSlice.middleware
    ),
});
