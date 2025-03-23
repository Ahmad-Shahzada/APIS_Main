import { configureStore } from '@reduxjs/toolkit';
import { randomUserApi } from '../features/api/randomUserApi';

export const store = configureStore({
  reducer: {
    [randomUserApi.reducerPath]: randomUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomUserApi.middleware),
});
