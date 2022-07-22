import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const api = createApi( {
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery( {
        baseUrl: 'https://fakestoreapi.com/',
    } ),
    tagTypes: [ 'Documents' ],
    endpoints: () => ( {} ),
} )

// Test
export const enhancedApi = api.enhanceEndpoints( {
    endpoints: () => ( {
        getPost: () => 'test',
    } ),
} )