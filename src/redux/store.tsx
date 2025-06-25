import { configureStore } from '@reduxjs/toolkit';
import { generalApi } from './generalApi/api';

export const store = configureStore({
    reducer: { [generalApi.reducerPath]: generalApi.reducer, },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(generalApi.middleware)
})