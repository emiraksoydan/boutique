import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Category } from '../../types/CategoryDto';
import type { AddCategoryDto } from '../../types/AddCategoryDto';
import type { ResultProductDto } from '../../types/ResultProductDto';
import type { AddProductDto } from '../../types/AddProductDto';
import type { UpdateProductDto } from '../../types/UpdateProductDto';
import type { ResultProductWithCategoryDto } from '../../types/ResutlProductWithCategoryDto';
import type { FeatureSliderDto } from '../../types/FeatureSliderDto';
import type { AddFeatureSliderDto } from '../../types/AddFeatureSliderDto';

export const generalApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7098/api/' }),
    tagTypes: ['Category', 'Product', 'FeatureSlider'],
    endpoints: (build) => (
        {
            getAllCategories: build.query<Category[], void>({
                query: () => 'Categories',
                providesTags: ['Category'],
                keepUnusedDataFor: 0,
            }),
            getCategoryById: build.query<Category, string>({
                query: (id) => `Categories/${id}`,
            }),
            addCategory: build.mutation<string, AddCategoryDto>({
                query: (body) => ({
                    url: 'Categories',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Category'],
            }),
            updateCategory: build.mutation<string, Category>({
                query: (body) => ({
                    url: 'Categories',
                    method: 'PUT',
                    body,
                }),
                invalidatesTags: ['Category'],
            }),
            deleteCategory: build.mutation<string, string>({
                query: (id) => ({
                    url: `Categories?id=${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Category'],
            }),

            getAllProducts: build.query<ResultProductDto[], void>({
                query: () => 'Product',
                providesTags: ['Product'],
                keepUnusedDataFor: 0,
            }),
            getAllProductsWithCategory: build.query<ResultProductWithCategoryDto[], void>({
                query: () => 'Product/ResultWithCategory',
                providesTags: ['Product'],
                keepUnusedDataFor: 0,
            }),
            getProductById: build.query<ResultProductDto, string>({
                query: (id) => `Product/${id}`,
            }),
            addProduct: build.mutation<string, AddProductDto>({
                query: (body) => ({
                    url: 'Product',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['Product'],
            }),
            updateProduct: build.mutation<string, UpdateProductDto>({
                query: (body) => ({
                    url: 'Product',
                    method: 'PUT',
                    body,
                }),
                invalidatesTags: ['Product'],
            }),
            deleteProduct: build.mutation<string, string>({
                query: (id) => ({
                    url: `Product?id=${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Product'],
            }),

            getAllFeatureSlider: build.query<FeatureSliderDto[], void>({
                query: () => 'FeatureSlider',
                providesTags: ['FeatureSlider'],
                keepUnusedDataFor: 0,
            }),
            getFeatureSliderById: build.query<FeatureSliderDto, string>({
                query: (id) => `FeatureSlider/${id}`,
            }),
            addFeatureSlider: build.mutation<string, AddFeatureSliderDto>({
                query: (body) => ({
                    url: 'FeatureSlider',
                    method: 'POST',
                    body,
                }),
                invalidatesTags: ['FeatureSlider'],
            }),
            updateFeatureSlider: build.mutation<string, FeatureSliderDto>({
                query: (body) => ({
                    url: 'FeatureSlider',
                    method: 'PUT',
                    body,
                }),
                invalidatesTags: ['FeatureSlider'],
            }),
            deleteFeatureSlider: build.mutation<string, string>({
                query: (id) => ({
                    url: `FeatureSlider?id=${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['FeatureSlider'],
            }),
        }
    ),
})

export const { useGetAllCategoriesQuery,
    useLazyGetCategoryByIdQuery,
    useAddCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
    useGetAllProductsQuery,
    useGetAllProductsWithCategoryQuery,
    useLazyGetProductByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation, useGetAllFeatureSliderQuery, useAddFeatureSliderMutation, useDeleteFeatureSliderMutation, useUpdateFeatureSliderMutation, useLazyGetFeatureSliderByIdQuery } = generalApi;