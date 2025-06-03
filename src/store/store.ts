import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import { tagsSlice } from '@/features/tagsSlice';
import { articlesSlice } from '@/features/articlesSlice';
import { contentRailSlice } from '@/features/contentRailSlice';
import { coursesSlice } from '@/features/courseSlice';
import { userSlice } from '@/features/userSlice';
import { categoriesSlice } from '@/features/categoriesSlice';
import { subscribeSlice } from '@/features/subscribeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userStore'], // only persist auth if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      tagsSlice.middleware,
      articlesSlice.middleware,
      contentRailSlice.middleware,
      coursesSlice.middleware,
      userSlice.middleware,
      categoriesSlice.middleware,
      subscribeSlice.middleware
    ),
});

export const persistor = persistStore(store);
