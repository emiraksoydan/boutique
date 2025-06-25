import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Category } from '../../types/Category';

export const generalApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7098/api/' }),
    endpoints: (build) => (
        {
            getAllCategories: build.query<Category[], void>({
                query: () => 'Categories',
                keepUnusedDataFor: 0,
            }),

        }
    ),
})

export const { useGetAllCategoriesQuery } = generalApi;