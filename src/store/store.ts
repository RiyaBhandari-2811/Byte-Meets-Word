import { configureStore } from '@reduxjs/toolkit';
import { tagsSlice } from '@/features/tagsSlice';
import { articlesSlice } from '@/features/articlesSlice';
import { contentRailSlice } from '@/features/contentRailSlice';
import { coursesSlice } from '@/features/courseSlice';
import { userSlice } from '@/features/userSlice';
import userStoreSlice from '@/features/store_slice/userStoreSlice';

export const store = configureStore({
  reducer: {
    [tagsSlice.reducerPath]: tagsSlice.reducer,
    [articlesSlice.reducerPath]: articlesSlice.reducer,
    [contentRailSlice.reducerPath]: contentRailSlice.reducer,
    [coursesSlice.reducerPath]: coursesSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    userStore: userStoreSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagsSlice.middleware,
      articlesSlice.middleware,
      contentRailSlice.middleware,
      coursesSlice.middleware,
      userSlice.middleware
    ),
});
