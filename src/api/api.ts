import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const api = createApi( {
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery( {
        baseUrl: 'http://localhost:3080/',
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