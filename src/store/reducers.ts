import { combineReducers } from '@reduxjs/toolkit';
import { tagsSlice } from '@/features/tagsSlice';
import { articlesSlice } from '@/features/articlesSlice';
import { contentRailSlice } from '@/features/contentRailSlice';
import { coursesSlice } from '@/features/courseSlice';
import { userSlice } from '@/features/userSlice';
import userStoreSlice from '@/features/store_slice/userStoreSlice';
import { categoriesSlice } from '@/features/categoriesSlice';
import { subscribeSlice } from '@/features/subscribeSlice';

const rootReducer = combineReducers({
  [tagsSlice.reducerPath]: tagsSlice.reducer,
  [articlesSlice.reducerPath]: articlesSlice.reducer,
  [contentRailSlice.reducerPath]: contentRailSlice.reducer,
  [coursesSlice.reducerPath]: coursesSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [categoriesSlice.reducerPath]: categoriesSlice.reducer,
  [subscribeSlice.reducerPath]: subscribeSlice.reducer,
  userStore: userStoreSlice,
});

export default rootReducer;
