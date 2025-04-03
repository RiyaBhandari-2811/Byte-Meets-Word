import { configureStore } from '@reduxjs/toolkit';
import { tagsSlice } from '@/features/tagsSlice';
import { articlesSlice } from '@/features/articlesSlice';

export const store = configureStore({
  reducer: {
    [tagsSlice.reducerPath]: tagsSlice.reducer,
    [articlesSlice.reducerPath]: articlesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagsSlice.middleware,
      articlesSlice.middleware
    ),
});
